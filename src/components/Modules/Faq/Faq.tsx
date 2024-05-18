import { Title } from "@/components/UI/Heading/Heading";
import styles from "./styles.module.scss";
import FaqMessage from "./faq-message";

export default function Faq() {
  return (
    <div className={styles.wrap}>
      <Title className={styles.title}>FAQ</Title>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <FaqMessage>Что будет после обучения?</FaqMessage>
        </li>
        <li className={styles.listItem}>
          <FaqMessage>Что будет после обучения?</FaqMessage>
        </li>
        <li className={styles.listItem}>
          <FaqMessage>Нужен ли опыт?</FaqMessage>
        </li>
        <li className={styles.listItem}>
          <FaqMessage>Нужен ли опыт?</FaqMessage>
        </li>
        <li className={styles.listItem}>
          <FaqMessage>Нужен ли опыт?</FaqMessage>
        </li>
        <li className={styles.listItem}>
          <FaqMessage>Нужен ли опыт?</FaqMessage>
        </li>
      </ul>
    </div>
  );
}
