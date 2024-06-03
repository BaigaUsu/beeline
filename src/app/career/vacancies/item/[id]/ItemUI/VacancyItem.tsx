'use client';
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

const sectionHeaders = {
  requirements: 'Требования:',
  offer: 'Мы предлагаем:',
  salary: 'Зарплата:',
  type: 'Тип работы:',
};

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

  const formatList = (text: string) => {
    return text.split(/[\r\n]+/).map((item, index) => <li key={index}>{item}</li>);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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
                г. {vacancy.city}
              </div>
              <h2>{vacancy.position}</h2>
              <div className={styles.type}>
                <h3>{sectionHeaders.type}</h3>
                <p>{capitalizeFirstLetter(vacancy.type)}</p>
              </div>
              <div className={styles.salary}>
                <h3>{sectionHeaders.salary}</h3>
                <p>{vacancy.salary}</p>
              </div>
              
              <div className={styles.requirements}>
                <h3>{sectionHeaders.requirements}</h3>
                <ul>
                  {formatList(vacancy.requirements)}
                </ul>
              </div>
              <div className={styles.offer}>
                <h3>{sectionHeaders.offer}</h3>
                <ul>
                  {formatList(vacancy.offer)}
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
