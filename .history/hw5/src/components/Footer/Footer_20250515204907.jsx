import styles from "./Footer.module.scss";
import Colijob from "../../assets/Cooljob-footer.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Google from "../../assets/Google.svg";
import Twitter from "../../assets/Twitter.svg";
import Facebook from "../../assets/Facebook-mini.svg";

// Footer component with popular cities and social links
function Footer() {
  return (
    // Full width background
    <div className={styles.footer_bg}>
      {/* Centered footer content */}
      <footer className={styles.footer}>
        {/* Footer title */}
        <h2>Популярные города</h2>
        {/* Links to popular cities */}
        <div className={styles.footer_links}>
          <a href="#">Осака</a>
          <a href="#">Коясан</a>
          <a href="#">Токио</a>
          <a href="#">Хаконэ</a>
          <a href="#">Наэба</a>
          <a href="#">Томаму</a>
          <a href="#">Йокогама</a>
          <a href="#">Нагоя</a>
          <a href="#">Саппоро</a>
          <a href="#">Кобе</a>
        </div>
        {/* Logos section: site logo and social media */}
        <div className={styles.footer_logos}>
          {/* Site logo */}
          <a href="#" className={styles.colijob_logo}>
            <img src={Colijob} alt="Colijob" />
          </a>
          {/* Social media logos */}
          <div className={styles.social_logos}>
            <a href="#">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={Google} alt="Google" />
            </a>
            <a href="#">
              <img src={LinkedIn} alt="Linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
