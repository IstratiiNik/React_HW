import styles from "./VacancyCardList.module.scss";
import VacancyCard from "../VacancyCard/VacancyCard";

import Sony from "../../assets/Sony-vacan.svg";
import Facebook from "../../assets/Facebook.svg";
import Cola from "../../assets/Cola.svg";

function VacancyCardList() {
  const vacancyInfo = [
    {
      name: "Менеджер по управлению финансами в крупной компании",
      color: "rgb(81, 130, 255)",
      category_name: "Финансы",
      location: "Осака, Япония",
      company_url: Sony,
      company_name: "Sony",
      company_text: "3 дня назад",
    },
    {
      name: "Специалист по продажам",
      color: "rgb(255, 81, 238)",
      category_name: "Продажи",
      location: "Коясан, Япония",
      company_url: Facebook,
      company_name: "Facebook",
      company_text: "7 дней назад",
    },
    {
      name: "Оператор колл центра",
      color: "rgb(88, 217, 77)",
      category_name: "Служба поддержки",
      location: "Томаму, Япония",
      company_url: Cola,
      company_name: "CocaCola",
      company_text: "1 день назад",
    },
    {
      name: "Системный администратор",
      color: "rgb(255, 144, 81)",
      category_name: "Мультимедиа",
      location: "Токио, Япония",
      company_url: Sony,
      company_name: "Sony",
      company_text: "3 дня назад",
    },
    {
      name: "Дизайнер интерьера в профессиональную студию в центре города",
      color: "rgb(248, 66, 66)",
      category_name: "Дизайн",
      location: "Йокогама, Япония",
      company_url: Facebook,
      company_name: "Facebook",
      company_text: "7 дней назад",
    },
    {
      name: "Водитель на дальние дистанции",
      color: "rgb(56, 56, 56)",
      category_name: "Грузоперевозки",
      location: "Кобе, Япония",
      company_url: Cola,
      company_name: "CocaCola",
      company_text: "1 день назад",
    },
  ];

  return (
    <section className={styles.vacancy_card_list}>
      <h2>Новые вакансии</h2>
      <p>Найди работу своей мечты прямо сейчас</p>
      <div className={styles.cards}>
        {vacancyInfo.map((singleVacationCard, index) => (
          <VacancyCard
            key={index + singleVacationCard.name}
            vacancyInfo={singleVacationCard}
          />
        ))}
      </div>
      <div className={styles.vacancy_card_button}>
        <button>Все вакансии</button>
      </div>
    </section>
  );
}

export default VacancyCardList;
