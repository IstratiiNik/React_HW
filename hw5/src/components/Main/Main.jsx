import styles from "./Main.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import CategoryCardList from "../CategoryCardList/CategoryCardList";

function Main() {
  return (
    <div>
      <SearchBar />
      <CategoryCardList />
    </div>
  );
}

export default Main;
