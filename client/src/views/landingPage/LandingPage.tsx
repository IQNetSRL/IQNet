import React from "react";
import Particle from "../../components/particles/Particles";
import Form from "../../components/form/Form";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <main className={styles.mainLanding}>
      <section className={styles.sectionLanding}>
        <Particle />
        <h1 className={styles.title}>IQNet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed
          voluptatum dolorem, ab facere temporibus qui veniam non repellendus
          quae.
        </p>
      </section>
      <section className={styles.sectionForm}>
        <Form />
      </section>
    </main>
  );
}

export default LandingPage;
