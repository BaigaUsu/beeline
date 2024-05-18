'use client'

import { useState } from 'react';
import styles from './faq-message.module.scss';

export default function FaqMessage({ children }: { children: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrap}>
      <button className={styles.question} onClick={toggleOpen}>
        {children} <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.answer}>Здесь будет ответ на этот вопрос</div>}
    </div>
  );
}