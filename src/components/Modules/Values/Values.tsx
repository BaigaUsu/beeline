import { Title } from "@/components/UI/Heading/Heading";
import styles from "./values.module.scss";
import Image from "next/image";

export default function Values() {
  return (
    <div className={styles.wrap}>
      <Title>Наши ценности</Title>
      <div className={styles.contentWrap}>
        <div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.circle}>
                <span className={styles.numberInCircle}>1</span>
              </div>
              <p className={styles.description}>Мы клиентооцентричны</p>
            </li>
            <li className={styles.listItem}>
              <div className={styles.circle}>
                <span className={styles.numberInCircle}>2</span>
              </div>
              <p className={styles.description}>Мы нацелены на результат</p>
            </li>
            <li className={styles.listItem}>
              <div className={styles.circle}>
                <span className={styles.numberInCircle}>3</span>
              </div>
              <p className={styles.description}>Мы сотрудничаем</p>
            </li>
            <li className={styles.listItem}>
              <div className={styles.circle}>
                <span className={styles.numberInCircle}>4</span>
              </div>
              <p className={styles.description}>Мы вовлечены</p>
            </li>
            <li className={styles.listItem}>
              <div className={styles.circle}>
                <span className={styles.numberInCircle}>5</span>
              </div>
              <p className={styles.description}>Мы ответственны</p>
            </li>
          </ul>
        </div>
        <div>
          <Image src='/values-image/our-values.png' alt="our-values-img" width='681' height='501'/>
        </div>
      </div>
    </div>
  );
}
