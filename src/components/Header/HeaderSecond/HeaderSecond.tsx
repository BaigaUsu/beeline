import Image from "next/image";
import styles from "./headerSecond.module.scss";
import Button from "@/components/UI/Button/Button";

export default function HeaderSecond() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoListWrap}>
          <div>
            <Image src='/logo.svg' alt="" width={44} height={44} />
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Тарифы</li>
            <li className={styles.listItem}>Услуги</li>
            <li className={styles.listItem}>Пополнение</li>
            <li className={styles.listItem}>Роуминг</li>
            <li className={styles.listItem}>Карьера в Beeline</li>
            <li className={styles.listItem}>Регистрация номера</li>
          </ul>
        </div>

        <div className={styles.logInWrap}>
          <Image src='/searchIcon.svg' alt="" width={24} height={24} />
          <Button className={styles.btn} variant="main">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}
