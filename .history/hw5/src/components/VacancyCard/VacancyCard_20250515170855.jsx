import styles from "./VacancyCard.module.scss";

// Component for displaying a single vacancy card
function VacancyCard({ vacancyInfo }) {
  return (
    <div className={styles.vacancy_card}>
      {/* Category section with colored circle and category name */}
      <div className={styles.card_category}>
        <span
          className={styles.category_circle}
          style={{ backgroundColor: vacancyInfo.color }}
        ></span>
        <span className={styles.category_title}>
          {vacancyInfo.category_name}
        </span>
      </div>
      {/* Vacancy title */}
      <h2>{vacancyInfo.name}</h2>
      {/* Location info */}
      <p className={styles.card_location}>{vacancyInfo.location}</p>
      {/* Company info with logo and text */}
      <div className={styles.card_company}>
        <img src={vacancyInfo.company_url} alt={vacancyInfo.company_name} />
        <p>{`${vacancyInfo.company_name}, ${vacancyInfo.company_text}`}</p>
      </div>
    </div>
  );
}

export default VacancyCard;
