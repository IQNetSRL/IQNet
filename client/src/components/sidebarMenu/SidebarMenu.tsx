import React from "react";
import { BsExclamationCircle } from "@react-icons/all-files/bs/BsExclamationCircle";
import { RiContactsLine } from "@react-icons/all-files/ri/RiContactsLine";
import styles from "./SidebarMenu.module.scss";

const SidebarMenu = ({ isOpen, scrollToFormSection }) => {
  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <section className={styles.infoSection}>
        <button className={styles.toggleButton}>IQNet</button>
        <ul className={styles.menu}>
          <li onClick={() => scrollToFormSection("sectionAbout")}><BsExclamationCircle/>Nosotros</li>
          <li onClick={() => scrollToFormSection("sectionForm")}><RiContactsLine/>Contactános</li>
        </ul>
      </section>
    </div>
  );
};

export default SidebarMenu;
