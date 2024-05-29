'use client'
import React, { useState } from 'react';
import styles from "./footerNavMenu.module.scss";

export default function FooterNavMenu() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.listContainer}>
        <h6 className={styles.title} onClick={() => toggleSection('private')}>
          Частным лицам
        </h6>
        <ul className={`${styles.list} ${expandedSection === 'private' ? styles.expanded : ''}`}>
          <li className={styles.listItem}>Перейти в Beeline</li>
          <li className={styles.listItem}>Тарифы</li>
          <li className={styles.listItem}>Услуги</li>
          <li className={styles.listItem}>Акции и новости</li>
          <li className={styles.listItem}>Роуминг и звонки зарубеж</li>
          <li className={styles.listItem}>Пополнении</li>
          <li className={styles.listItem}>О компании</li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h6 className={styles.title} onClick={() => toggleSection('business')}>
          Бизнес
        </h6>
        <ul className={`${styles.list} ${expandedSection === 'business' ? styles.expanded : ''}`}>
          <li className={styles.listItem}>Стать корпоративным клиентом</li>
          <li className={styles.listItem}>Тарифы</li>
          <li className={styles.listItem}>Услуги</li>
          <li className={styles.listItem}>Поддержка</li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h6 className={styles.title} onClick={() => toggleSection('company')}>
          Компания
        </h6>
        <ul className={`${styles.list} ${expandedSection === 'company' ? styles.expanded : ''}`}>
          <li className={styles.listItem}>О нас</li>
          <li className={styles.listItem}>Устойчивое развитие</li>
          <li className={styles.listItem}>Работа в Beeline</li>
          <li className={styles.listItem}>Стажировка в Beeline</li>
          <li className={styles.listItem}>Кодекс поведения БП</li>
          <li className={styles.listItem}>Новости компании</li>
          <li className={styles.listItem}>Закупки</li>
          <li className={styles.listItem}>Политика конфиденциальности</li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h6 className={styles.title} onClick={() => toggleSection('support')}>
          Поддержка
        </h6>
        <ul className={`${styles.list} ${expandedSection === 'support' ? styles.expanded : ''}`}>
          <li className={styles.listItem}>Обратная связь</li>
          <li className={styles.listItem}>Помощь и поддержка</li>
          <li className={styles.listItem}>Часто задаваемые вопросы</li>
          <li className={styles.listItem}>Информация для абонентов</li>
        </ul>
      </div>
    </div>
  );
}