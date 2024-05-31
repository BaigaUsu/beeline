import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Title } from '@/components/UI/Heading/Heading';

const Coworking: React.FC = () => {
  return (
    <div className={styles.coworkingSection}>
      <Title className={styles.title}>Коворкинг</Title>
      <Image
        src="/vacancy-icons/coworking.png"
        alt="Coworking Space"
        width='950'
        height='640'
        className={styles.coworkingImage}
      />
    </div>
  );
};

export default Coworking;