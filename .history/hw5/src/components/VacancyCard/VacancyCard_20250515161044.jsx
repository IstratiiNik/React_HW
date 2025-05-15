import styles from "./VacancyCard.module.scss";

function VacancyCard({ vacancyInfo }) {
  return (
    <div className={styles.vacancy_card}>
      <div className={styles.card_category}>
        <span
          className={styles.category_circle}
          style={{ backgroundColor: vacancyInfo.color }}
        ></span>
        <p className={styles.category_title}>
          {vacancyInfo.category_name}
        </p>
      </div>
      <h2>{vacancyInfo.name}</h2>
      <p className={styles.card_location}>{vacancyInfo.location}</p>
      <div className={styles.card_company}>
        <img src={vacancyInfo.company_url} alt={vacancyInfo.company_name} />
        <p>{`${vacancyInfo.company_name}, ${vacancyInfo.company_text}`}</p>
      </div>
    </div>
  );
}

export default VacancyCard;
