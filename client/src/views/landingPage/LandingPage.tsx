import React, { useState } from "react";
import Particle from "../../components/particles/Particles";
import Form from "../../components/form/Form";
import SidebarMenu from "../../components/sideBarMenu/SideBarMenu";
import { IoMenu } from "@react-icons/all-files/io5/IoMenu";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  const [section, setSection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeSection = (value: number) => {
    setSection(value);
  };

  const scrollToFormSection = () => {
    const formSection = document.getElementById("sectionForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.mainLanding}>
      <Particle />
      <SidebarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section
        className={
          section === 1 ? styles.sectionLanding : styles.sectionLandingNo
        }
        onMouseEnter={() => handleChangeSection(1)}
      >
        <div
          className={`${styles.toggleButtonContainer} ${
            section !== 1 && styles.selected
          }`}
        >
          <button onClick={toggleMenu}>
            <IoMenu />
          </button>
        </div>
        <h1 className={styles.title}>IQNet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed
          voluptatum dolorem, ab facere temporibus qui veniam non repellendus
          quae.
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={scrollToFormSection}>CONTACTÁNOS</button>
        </div>
      </section>
      <section
        className={section === 2 ? styles.sectionAbout : styles.sectionAboutNo}
        onMouseEnter={() => handleChangeSection(2)}
        id="sectionAbout"
      >
        <div>
          <h1 className={styles.titleAbout}>¿Quienes Somos?</h1>
          <p className={styles.textAbout}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            libero explicabo voluptatem, quasi in? Quis dolore odio ipsa ipsum
            et necessitatibus error dolores qui, cupiditate quae expedita quo
            dolor quasi eveniet veniam, facilis totam itaque architecto
            explicabo, consequuntur vitae?
          </p>
        </div>
      </section>
      <section
        className={section === 3 ? styles.sectionForm : styles.sectionFormNo}
        onMouseEnter={() => handleChangeSection(3)}
        id="sectionForm"
      >
        <Form />
      </section>
    </main>
  );
}

export default LandingPage;
