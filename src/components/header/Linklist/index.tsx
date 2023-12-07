import LinkHeader from "./linkHeader";
import styles from "./styles.module.css";

function LinkList() {
  return (
    <ul className={styles.list}>
      <LinkHeader href="#home" text="Nosotros" />
      <LinkHeader href="#home" text="Buscar Cajeros" />
      <LinkHeader href="#home" text="Productos y Servicios" />
      <LinkHeader href="#home" text="Trabaja con Nosotros" />
    </ul>
  );
}

export default LinkList;
