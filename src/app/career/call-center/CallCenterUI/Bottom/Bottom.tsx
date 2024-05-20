// components/Bottom.js
import React from 'react';
import styles from './bottom.module.scss';

export default function Bottom() {
  return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>Актуальные вакансии</div>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles['vacancy-card']}>
                            <div>
                                <h2>Специалист контакт центра</h2>
                                <p>Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой, международной компании!</p>
                            </div>
                            <div className={styles.location}>
                                <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 14 6 14s6-9.582 6-14c0-3.314-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                                </svg>
                                <p>г.Ош</p>
                            </div>
                        </div>
                        <div className={styles['vacancy-card']}>
                            <div>
                            <h2>Специалист контакт-центра</h2>
                            <p>Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой, международной компании!</p>
                            </div>
                            <div className={styles.location}>
                            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 14 6 14s6-9.582 6-14c0-3.314-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                            </svg>
                            г.Бишкек
                            </div>
                        </div>
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.sidebar_header}>Все вакансии в КР (2)</div>
                            <ul>
                                <li>Ош (1)</li>
                                <li>Бишкек (1)</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};
