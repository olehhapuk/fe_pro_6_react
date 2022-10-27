import styles from './Navbar.module.css';

function Navbar({ title }) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>{title}</h1>
    </nav>
  );
}

export default Navbar;
