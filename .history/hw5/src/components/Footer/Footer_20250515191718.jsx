import styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={styles.footer}>
      <h2>Популярные города</h2>
      <div className={styles.}>
      	<a href="">Осака</a>
      	<a href="">Коясан</a>
      	<a href="">Токио</a>
      	<a href="">Хаконэ </a>
      	<a href="">Наэба</a>
      	<a href="">Томаму</a>
      	<a href="">Йокогама</a>
      	<a href="">Нагоя</a>
      	<a href="">Саппоро</a>
      	<a href="">Кобе</a>
      </div>
    </section>
  );
}

export default Footer;
