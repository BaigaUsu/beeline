import styles from "./headerFirst.module.scss";

export default function HeaderFirst() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Карта офисов</li>
            <li className={styles.listItem}>Акции и новости</li>
            <li className={styles.listItem}> Смартфоны</li>
            <li className={styles.listItem}>Перейти в Beeline</li>
            <li className={styles.listItem}>Balance.kg</li>
          </ul>
        </div>

        <div className={styles.settings}>
          <div className={styles.language}>
            <p>
              <span className={styles.black}>Рус</span> / Кырг
            </p>
          </div>
          <div className={styles.types}>
            <p>
              <span className={styles.black}>Частным лицам </span> / Бизнесу
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}