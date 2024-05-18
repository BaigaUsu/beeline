import styles from "./footerNavMenu.module.scss";

export default function FooterNavMenu() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <h6 className={styles.title}>Частным лицам</h6>
        <li className={styles.listItem}>Перейти в Beeline</li>
        <li className={styles.listItem}>Тарифы</li>
        <li className={styles.listItem}>Услуги</li>
        <li className={styles.listItem}>Акции и новости</li>
        <li className={styles.listItem}>Роуминг и звонки зарубеж</li>
        <li className={styles.listItem}>Пополнении</li>
        <li className={styles.listItem}>О компании</li>
      </ul>

      <ul className={styles.list}>
        <h6 className={styles.title}>Бизнес</h6>
        <li className={styles.listItem}>Стать корпоративным клиентом</li>
        <li className={styles.listItem}>Тарифы</li>
        <li className={styles.listItem}>Услуги</li>
        <li className={styles.listItem}>Поддержка</li>
      </ul>

      <ul className={styles.list}>
        <h6 className={styles.title}>Компания</h6>
        <li className={styles.listItem}>О нас</li>
        <li className={styles.listItem}>Устойчивое развитие</li>
        <li className={styles.listItem}>Работа в Beeline</li>
        <li className={styles.listItem}>Стажировка в Beeline</li>
        <li className={styles.listItem}>Кодекс поведения БП</li>
        <li className={styles.listItem}>Новости компании</li>
        <li className={styles.listItem}>Закупки</li>
        <li className={styles.listItem}>Политика конфиденциальности</li>
      </ul>

      <ul className={styles.list}>
        <h6 className={styles.title}>Поддержка</h6>
        <li className={styles.listItem}>Обратная связь</li>
        <li className={styles.listItem}>Настройки интернета</li>
        <li className={styles.listItem}>Офисы</li>
        <li className={styles.listItem}>Оставить заявку</li>
        <li className={styles.listItem}>Полезные документы и файлы</li>
        <li className={styles.listItem}>Отправка SMS</li>
        <li className={styles.listItem}>WhatsApp чат</li>
      </ul>
    </div>
  );
}
