import styles from "./SearchBar.module.scss";
import DisneyLogo from "../../assets/Disney.svg";
import FacebookLogo from "../../assets/Facebook.svg";
import MicrosoftLogo from "../../assets/Microsoft.svg";
import SonyLogo from "../../assets/Sony.svg";
import ColaLogo from "../../assets/Cola.svg";

// Component for the search bar and company logos
function SearchBar() {
  return (
    <>
      {/* Search section */}
      <div className={styles.search_div}>
        {/* Title of the search section */}
        <h1 className={styles.search_title}>
          Один клик <br />и работа в кармане
        </h1>

        {/* Search form container */}
        <div className={styles.form_container}>
          <form>
            {/* Input field for job title or company */}
            <input
              placeholder="Должность или компания"
              className={styles.first_input}
            />
            {/* Divider between input fields */}
            <span className={styles.form_span} />
            {/* Input field for city or country */}
            <input
              placeholder="Город, Страна"
              className={styles.second_input}
            />
          </form>
          <button className={styles.form_button}>Поиск</button>
        </div>
      </div>

      {/* Companies section */}
      <div className={styles.companies}>
        <div className={styles.companies_inner}>
          <p className={styles.companies_title}>Помогаем найти работу:</p>
          <div className={styles.companies_logos}>
            <img src={DisneyLogo} alt="Disney" className={styles.logo} />
            <img src={FacebookLogo} alt="Facebook" className={styles.logo} />
            <img src={MicrosoftLogo} alt="Microsoft" className={styles.logo} />
            <img src={SonyLogo} alt="Sony" className={styles.logo} />
            <img src={ColaLogo} alt="Cola" className={styles.logo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
