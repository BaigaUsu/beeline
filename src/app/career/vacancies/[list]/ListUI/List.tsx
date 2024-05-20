// components/Vacancy.tsx
import React from 'react';
import Link from 'next/link';
import styles from './list.module.scss';
import { MainTitle } from '@/components/UI/Heading/Heading';
import Image from 'next/image';

export default function List() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.vacancy}>
          <MainTitle className={styles.header}>
            Beeline <span className={styles.highlight}>Вакансии</span>
          </MainTitle>
          <div className={styles.card}>
            <div className={styles.location}>
              <Image src='/jobsIcons/locationIcon.svg' alt='' width='35' height='35'/>
              г. Ош
            </div>
            <h2>Стажер Мобильный разработчик (Android/IOS)</h2>
            <div className={styles.requirements}>
              <h3>Требования:</h3>
              <ul>
                <li>Понимание принципов разработки клиент-серверных приложений (CRUD)</li>
                <li>Навыки тестирования, включая JUnit</li>
                <li>Знания Flutter будет существенным плюсом</li>
                <li>Работа с базами данных, такими как SQLite или MySQL</li>
              </ul>
            </div>
            <div className={styles.offer}>
              <h3>Мы предлагаем:</h3>
              <ul>
                <li>Разрабатывать и поддерживать функционал мобильных приложений</li>
                <li>Обеспечивать достижение операционных планов и целей отдела</li>
                <li>Возможность обучаться у экспертов</li>
                <li>Развитие своих профессиональных и личных качеств</li>
                <li>Стажировку с возможностью дальнейшего трудоустройства</li>
              </ul>
            </div>
          </div>
          <Link href="/career/call-center" passHref legacyBehavior>
            <a className={styles.btn}>Call - center</a>
          </Link>
        </div>
      </div>
    </div>
  );
}