import React, { useState, useEffect, useRef } from "react";
import Particle from "../../components/particles/Particles";
import Form from "../../components/form/Form";
import SidebarMenu from "../../components/sideBarMenu/SideBarMenu";
import { IoMenu } from "@react-icons/all-files/io5/IoMenu";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const landingRef = useRef<HTMLDivElement | null>(null);

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

  const handleScroll = () => {
    if (aboutRef.current && formRef.current) {
      const aboutSectionTop = aboutRef.current.getBoundingClientRect().top;
      const formSectionTop = formRef.current.getBoundingClientRect().top;
      if (aboutSectionTop <= 300 && !(formSectionTop <= 300)) {
        aboutRef.current.classList.add(styles.scrolled);
      } else {
        aboutRef.current.classList.remove(styles.scrolled);
      }
    }

    if (formRef.current) {
      const formSectionTop = formRef.current.getBoundingClientRect().top;
      if (formSectionTop <= 300) {
        formRef.current.classList.add(styles.scrolled2);
      } else {
        formRef.current.classList.remove(styles.scrolled2);
      }
    }

    if (landingRef.current && aboutRef.current) {
      const landingSectionTop = landingRef.current.getBoundingClientRect().top;
      const aboutSectionTop = aboutRef.current.getBoundingClientRect().top;
      if (landingSectionTop <= 0 && !(aboutSectionTop <= 300)) {
        landingRef.current.classList.add(styles.scrolled1);
      } else {
        landingRef.current.classList.remove(styles.scrolled1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
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
      <div
        className={`${styles.toggleButtonContainer} ${styles.fixed}`}
        ref={navbarRef}
      >
        <button onClick={toggleMenu}>
          <IoMenu />
        </button>
      </div>
      <div className={styles.side}></div>
      <section className={styles.mainSection}>
        <section
          className={`${styles.sectionLanding} ${styles.scrolled1}`}
          id="sectionLanding"
          ref={landingRef}
        >
          <h1 className={styles.title}>IQNet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sed voluptatum dolorem, ab facere temporibus qui veniam non
            repellendus quae.
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={() => scrollToFormSection("sectionForm")}>
              CONTACTÁNOS
            </button>
          </div>
        </section>
        <section
          className={styles.sectionAbout}
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
        <section className={styles.sectionForm} id="sectionForm" ref={formRef}>
          <Form />
        </section>
      </section>
      <div className={styles.side}></div>
    </main>
  );
}

export default LandingPage;
