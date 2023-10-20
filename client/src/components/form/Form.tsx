import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUser, getCities } from "../../redux/actions.js";
import Swal from "sweetalert2";
import styles from "./Form.module.scss";

function Form() {
  const dispatch = useDispatch();
  const allCities = useSelector((state) => state.someReducer.allCities);
  const [filteredCities, setFilteredCities] = useState([]);
  const [isListVisible, setListVisible] = useState(false);
  const resultsRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
    query: "",
  });

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    setTimeout(() => {
      setListVisible(false);
    }, 200);
  };

  const handleFocus = () => {
    if (allCities.length > 0) {
      setListVisible(true);
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.query.trim() !== ""
    );
  };

  const renderAsterisk = (fieldName) => {
    if (formData[fieldName].trim() === "") {
      return <span>*</span>;
    }
    return null;
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleCityInputChange = (event) => {
    const cityName = event.target.value;
    const filteredCityList = allCities.filter((city) =>
      city.name.toLowerCase().includes(cityName.toLowerCase())
    );

    setFormData({
      ...formData,
      city: cityName,
    });

    setFilteredCities(filteredCityList);
    setListVisible(true);
  };

  const handleSelectCity = (selectedCity) => {
    setFormData({
      ...formData,
      city: selectedCity.name,
    });

    setFilteredCities([]);
    setListVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      Swal.fire({
        icon: "error",
        text: "Por favor, complete todos los campos (*) antes de enviar el formulario.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        color: "#5a5a5a",
        confirmButtonColor: "#E05424",
      });
      return;
    } else {
      Toast.fire({
        icon: "success",
        title: "¡Información recivida!",
      });
    }

    const {
      firstName,
      lastName,
      city,
      phoneNumber,
      emailAddress,
      address,
      query,
    } = formData;

    const user = {
      name: firstName,
      lastName,
      city,
      phoneNumber,
      emailAddress,
      address,
      consult: query,
    };

    dispatch(storeUser(user));

    setFormData({
      firstName: "",
      lastName: "",
      city: "",
      phoneNumber: "",
      emailAddress: "",
      address: "",
      query: "",
    });
  };

  return (
    <section className={styles.sectionForm}>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>CONTÁCTANOS</h2>
          <section>
            <section className={styles.section1}>
              <div>
                <label htmlFor="firstName">{renderAsterisk("firstName")}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">{renderAsterisk("lastName")}</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Apellido"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </section>
            <section className={styles.section2}>
              <div>
                <label htmlFor="city">{renderAsterisk("city")}</label>
                <div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={formData.city}
                    onChange={handleCityInputChange}
                  />
                  {isListVisible && filteredCities.length > 0 && (
                    <ul className={styles.cityResults} ref={resultsRef}>
                      {filteredCities
                        .slice(0, 5)
                        .map((city: { id: string; name: string }) => (
                          <li
                            key={city.id}
                            onClick={() => handleSelectCity(city)}
                          >
                            {city.name}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Direccion"
                  value={formData.address}
                  onChange={handleInputChange}
                  autoComplete="address"
                />
              </div>
            </section>
            <section className={styles.section2}>
              <div>
                <input
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Correo electrónico"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">
                  {renderAsterisk("phoneNumber")}
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Número de Teléfono"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </section>
            <section className={styles.section3}>
              <div>
                <label htmlFor="query">{renderAsterisk("query")}</label>
                <textarea
                  id="query"
                  name="query"
                  placeholder="Consulta"
                  value={formData.query}
                  onChange={handleInputChange}
                />
              </div>
            </section>
          </section>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
