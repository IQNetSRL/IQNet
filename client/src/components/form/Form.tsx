import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "../../redux/actions.js";
import styles from "./Form.module.scss";

function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, city, phoneNumber, emailAddress, query } =
      formData;

    const user = {
      name: firstName,
      lastName,
      city,
      phoneNumber,
      emailAddress,
      consult: query,
    };

    dispatch(storeUser(user));

    setFormData({
      firstName: "",
      lastName: "",
      city: "",
      phoneNumber: "",
      emailAddress: "",
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
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Ciudad"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
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
                <input
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Correo electrónico"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
              </div>
              <div>
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
