import styles from "./CategoryCardList.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import Circle from "../../assets/Circle.svg";
import Car from "../../assets/Car.svg";
import Window from "../../assets/Window.svg";
import ForkKnife from "../../assets/ForkKnife.svg";
import Bandage from "../../assets/Bandage.svg";
import Movie from "../../assets/Movie.svg";
import Message from "../../assets/Message.svg";
import Box from "../../assets/Box.svg";
import Cart from "../../assets/Cart.svg";
import Arrow from "../../assets/Arrow.svg";

// Component for displaying a list of category cards
function CategoryCardList() {
  // Array containing information about each category card
  const cardInfo = [
    { text: "Финансы", url: Circle },
    { text: "Грузоперевозки", url: Car },
    { text: "Дизайн", url: Window },
    { text: "Ресторанный бизнес", url: ForkKnife },
    { text: "Медицина", url: Bandage },
    { text: "Мультимедиа", url: Movie },
    { text: "Служба поддержки", url: Message },
    { text: "Менеджмент", url: Box },
    { text: "Продажи", url: Cart },
  ];

  return (
    <section className={styles.category_card_list}>
      {/* Title for the category card list */}
      <p className={styles.category_card_list_title}>
        Работа <br /> по категориям
      </p>

      {/* Container for the category cards */}
      <div className={styles.cards}>
        {/* Render each category card */}
        {cardInfo.map((singleCardInfo, index) => (
          <CategoryCard
            key={index + singleCardInfo.text}
            cardInfo={singleCardInfo}
          />
        ))}

        {/* Card for "More Categories" */}
        <div className={styles.more_card}>
          <img src={Arrow} alt="Arrow" />
          <p>
            Больше <br /> Категорий
          </p>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardList;
