import React from "react";
import styles from "./Form.module.scss";

function Form() {
  return (
    <section className={styles.sectionForm}>
      <div>
        <h2>CONTÁCTANOS</h2>
        <form action="">
          <section className={styles.section1}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nombre"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Apellido"
              />
            </div>
          </section>
          <section className={styles.section2}>
            <div className={styles.formGroup}>
              <input type="text" id="city" name="city" placeholder="Ciudad" />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Número de Teléfono"
              />
            </div>
          </section>
          <section className={styles.section3}>
            <div className={styles.formGroup}>
              <textarea id="query" name="query" placeholder="Consulta" />
            </div>
          </section>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
