import styles from "./Main.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import VacancyCardList from "../VacancyCardList/VacancyCardList";

function Main() {
  return (
    <div>
      <SearchBar />
      <CategoryCardList />
      <VacancyCardList />
    </div>
  );
}

export default Main;
