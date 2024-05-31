import React from 'react';
import styles from './styles.module.scss';
import StageCard from './StageCard';
import Coworking from './Coworking';
import { Title } from '@/components/UI/Heading/Heading';
import Resume from './Resume';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Этапы устройства на стажировку</Title>
      <div className={styles.stages}>
        <StageCard
          iconSrc="/vacancy-icons/icon-1.svg"
          title="Отлик"
          description="Просмотри раздел актуальных вакансий стажировок, выбери подходящую тебе и откликайся!"
        />
        <StageCard
          iconSrc="/vacancy-icons/icon-2.svg"
          title="Рассмотрение"
          description="Твое резюме вскоре рассмотрит руководство и команда соответствующего подразделения."
        />
        <StageCard
          iconSrc="/vacancy-icons/icon-3.svg"
          title="Собеседование"
          description="Если твое резюме подходит по требованиям, мы свяжемся с тобой и пригласим на собеседование. На некоторые позиции предусмотрено выполнение тестового задания."
        />
        <StageCard
          iconSrc="/vacancy-icons/icon-4.svg"
          title="Обратная связь"
          description="Мы предоставим обратную связь в оговоренные сроки и всегда рады ответить на твои вопросы. Не стесняйся обращаться! Будем на связи."
        />
      </div>
      <Coworking />
      <Resume/>
    </div>
  );
};

export default Main;