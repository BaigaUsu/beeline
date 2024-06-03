import React from 'react';
import styles from './stageCard.module.scss';
import Image from 'next/image';

interface StageCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const StageCard: React.FC<StageCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className={styles.stageCard}>
      <Image src={iconSrc} alt={title} width='80' height='80' className={styles.stageIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StageCard;