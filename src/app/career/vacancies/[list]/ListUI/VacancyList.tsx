// components/Vacancy.tsx
'use client'
import React, { useState, useEffect } from 'react';
import styles from './list.module.scss';
import { MainTitle } from '@/components/UI/Heading/Heading';
import Image from 'next/image';
import ApiUrl from '@/app/api/values';
import Main from './Stages/Main';

interface Vacancy {
  id: number;
  name: string;
  slug: string;
  level: string;
  salary: string;
  type: string;
  number: number;
  city: string;
  requirements: string;
  offer: string;
  status: string;
}

export default function VacancyList() {
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(ApiUrl);
      const data: Vacancy[] = await response.json();
      setVacancy(data[0]); // Предполагается, что API возвращает массив с одним объектом вакансии
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  fetchData();
}, []);
  return (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.vacancy}>
        <MainTitle className={styles.header}>
          Beeline <span className={styles.highlight}>Вакансии</span>
        </MainTitle>
        {vacancy && (
          <div className={styles.card}>
            <div className={styles.location}>
              <Image src="/jobsIcons/locationIcon.svg" alt="" width="35" height="35" />
              {vacancy.city}
            </div>
            <h2>{vacancy.name}</h2>
            <div className={styles.requirements}>
              <h3>Требования:</h3>
              <ul>
                {vacancy.requirements.split('\r\n').map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className={styles.offer}>
              <h3>Мы предлагаем:</h3>
              <ul>
                {vacancy.offer.split('\r\n').map((off, index) => (
                  <li key={index}>{off}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Main/>
      </div>
    </div>
  </div>
)
};