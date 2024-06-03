import React from 'react';
import styles from './coworking.module.scss';
import Image from 'next/image';
import { Title } from '@/components/UI/Heading/Heading';

const Coworking: React.FC = () => {
  return (
    <div className={styles.coworkingSection}>
      <Title className={styles.title}>Коворкинг</Title>
      <div className={styles.imageWrapper}>
        <Image
          src="/vacancy-icons/coworking.png"
          alt="Coworking Space"
          fill
          className={styles.imageFill}
        />
        <div className={styles.overlay}></div>
        <div className={styles.hoverText}>
          Мы предоставляем современное и комфортное рабочее пространство для фрилансеров и удаленных сотрудников. Наш коворкинг оснащен всем необходимым для продуктивной работы и творческого взаимодействия.
        </div>
      </div>
    </div>
  );
};

export default Coworking;