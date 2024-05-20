import styles from './questions.module.scss';

export default function Questions () {
  return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.faqSection}>
                    <h3 className={styles.faqTitle}>Популярные вопросы</h3>
                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <p>Нужен ли опыт?</p>
                                <span className={styles.faqExpand}>+</span>
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <p>Какие языки знать обязательно?</p>
                                <span className={styles.faqExpand}>+</span>
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <p>Сколько длится обучение?</p>
                                <span className={styles.faqExpand}>+</span>
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <p>Что будет после обучения?</p>
                                <span className={styles.faqExpand}>+</span>
                            </div>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>
                                <p>Куда дальше после КЦ?</p>
                                <span className={styles.faqExpand}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};