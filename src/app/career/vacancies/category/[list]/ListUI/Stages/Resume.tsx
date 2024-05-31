import React from 'react';
import styles from './resume.module.scss';
import Image from 'next/image';
import { Title } from '@/components/UI/Heading/Heading';

const Resume: React.FC = () => {
  return (
    <div className={styles.resumeSection}>
      <Title className={styles.title}>Куда отправлять резюме?</Title>
      <div className={styles.consultationForm}>
        <h3>Получить консультацию</h3>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="tel" placeholder="Номер телефона" required />
          <button type="submit">Оставить заявку</button>
        </form>
        <p>
          Нажимая кнопку, принимаю условия&nbsp;
          <a href="/policy" target="_blank" rel="noopener noreferrer">политики</a>&nbsp;
          и&nbsp;
          <a href="/user-agreement" target="_blank" rel="noopener noreferrer">пользовательского соглашения</a>
        </p>
      </div>
      <div className={styles.contactInfo}>
        <div>
        <a href="mailto:dreamteam@beeline.kg">dreamteam@beeline.kg</a>
        <p>Отправляй резюме на почту и с тобой скоро свяжется представитель HR Beeline.</p>
        </div>
        <Image src="/vacancy-icons/dream_team.png" alt="Contact Illustration" width='171' height='161' />
      </div>
    </div>
  );
};

export default Resume;