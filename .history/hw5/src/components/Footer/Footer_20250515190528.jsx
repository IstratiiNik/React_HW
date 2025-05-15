import styles from "./Footer.module.scss";

function Footer() {
  return (
	<section className={styles.footer}>
		<h2>Популярные города</h2>
		<a href="#">Осака</a>
	</section>
  );
}

export default Footer;
