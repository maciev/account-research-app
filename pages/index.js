import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.searchDiv}>
        <input className={styles.input} type="text" />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
}
