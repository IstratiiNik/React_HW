import styles from "./Header.module.scss";

// Header component for navigation
function Header() {
  return (
    <header className={styles.header}>
      {/* Left section: Logo and navigation links */}
      <div>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          Colijob
        </a>
        {/* Link to job search */}
        <a href="#" className={styles.find_job}>
          Поиск работы
        </a>
        {/* Link to startup search */}
        <a href="#" className={styles.find_startap}>
          Поиск Стартапов
        </a>
      </div>

      {/* Right section: Registration and login */}
      <div>
        {/* Registration link */}
        <a href="#" className={styles.reg}>
          Регистрация
        </a>
        <button className={styles.sign_button}>Вход</button>
      </div>
    </header>
  );
}

export default Header;
