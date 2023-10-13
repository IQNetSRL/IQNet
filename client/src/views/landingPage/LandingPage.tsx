import React, { useState, useEffect, useRef } from "react";
import Particle from "../../components/particles/Particles";
import Form from "../../components/form/Form";
import SidebarMenu from "../../components/sideBarMenu/SideBarMenu";
import { IoMenu } from "@react-icons/all-files/io5/IoMenu";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  const [section, setSection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && !event.target.closest(".sidebar")) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleChangeSection = (value: number) => {
    setSection(value);
  };

  const scrollToFormSection = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.mainLanding}>
      <Particle />
      <SidebarMenu
        isOpen={isMenuOpen}
        scrollToFormSection={scrollToFormSection}
      />
      <section
        className={
          section === 1 ? styles.sectionLanding : styles.sectionLandingNo
        }
        onMouseEnter={() => handleChangeSection(1)}
        id="sectionLanding"
      >
        <div
          className={`${styles.toggleButtonContainer} ${styles.fixed}`}
          ref={navbarRef}
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
          <button onClick={() => scrollToFormSection("sectionForm")}>
            CONTACTÁNOS
          </button>
        </div>
      </section>
      <section
        className={section === 2 ? styles.sectionAbout : styles.sectionAboutNo}
        onMouseEnter={() => handleChangeSection(2)}
        id="sectionAbout"
        ref={aboutRef}
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
