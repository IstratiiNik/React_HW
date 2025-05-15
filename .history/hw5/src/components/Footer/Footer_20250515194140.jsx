import styles from "./Footer.module.scss";
import Colijob from "../../assets/Coolijob-footer.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Google from "../../assets/Google.svg";
import Twitter from "../../assets/Twitter.svg";
import Facebook from "../../assets/FacebookMini.svg";

function Footer() {
  return (
    <section className={styles.footer}>
      <h2>Популярные города</h2>
      <div className={styles.footer_links}>
        <a href="#">Осака</a>
        <a href="#">Коясан</a>
        <a href="#">Токио</a>
        <a href="#">Хаконэ </a>
        <a href="#">Наэба</a>
        <a href="#">Томаму</a>
        <a href="#">Йокогама</a>
        <a href="#">Нагоя</a>
        <a href="#">Саппоро</a>
        <a href="#">Кобе</a>
      </div>
      <div className={styles.footer_logos}>
        <a href="#" className={styles.colijob_logo}>
          <img src={Colijob} alt="Colijob" />
          <div className={styles.social_logos}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Footer;
