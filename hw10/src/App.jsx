import styles from "./App.module.scss";
import CatImage from "./components/CatImage";

function App() {
  return (
    <div className={styles.appContainer}>
      <CatImage />
    </div>
  );
}

export default App;
