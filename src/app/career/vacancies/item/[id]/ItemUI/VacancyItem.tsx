'use client'
import React, { useState, useEffect } from 'react';
import styles from './list.module.scss';
import { MainTitle } from '@/components/UI/Heading/Heading';
import Image from 'next/image';
import ApiUrl from '@/app/api/apiList';
import Main from './Stages/Main';
import { useParams } from 'next/navigation';

interface Vacancy {
  id: number;
  position: string;
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

export default function VacancyItem() {
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          console.log('Fetching data from:', `${ApiUrl}/${id}`);
          const response = await fetch(`${ApiUrl}/${id}/`);
          const data: Vacancy = await response.json();
          console.log('Fetched data:', data);
          setVacancy(data);
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  console.log('ID from router query:', id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.vacancy}>
          <MainTitle className={styles.header}>
            Beeline <span className={styles.highlight}>Вакансии</span>
          </MainTitle>
          {vacancy ? (
            <div className={styles.card}>
              <div className={styles.location}>
                <Image src="/jobsIcons/locationIcon.svg" alt="" width="35" height="35" />
                {vacancy.city}
              </div>
              <h2>{vacancy.position}</h2>
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
          ) : (
            <p>Загрузка данных...</p>
          )}
          <Main />
        </div>
      </div>
    </div>
  );
}