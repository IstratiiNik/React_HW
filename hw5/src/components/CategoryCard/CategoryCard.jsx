import styles from "./CategoryCard.module.scss";

// Component for displaying a category card
function CategoryCard({ cardInfo }) {
  return (
    <div className={styles.category_card}>
      {/* Image representing the category */}
      <img src={cardInfo.url} alt={cardInfo.text} />
      {/* Text description of the category */}
      <p>{cardInfo.text}</p>
    </div>
  );
}

export default CategoryCard;
