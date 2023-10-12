import React from "react";
import styles from "./SidebarMenu.module.scss";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <ul className={styles.menu}>
        <li>Nosotros</li>
        <li>Contactanos</li>
      </ul>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        Toggle Menu
      </button>
    </div>
  );
};

export default SidebarMenu;