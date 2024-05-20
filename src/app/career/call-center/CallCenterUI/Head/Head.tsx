import Image from 'next/image';
import styles from './head.module.scss';
import Link from 'next/link';

export default function Head() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.topNavigation}>
                    <Link href="/career" className={styles.topLink}>Карьера в Beeline</Link>
                    <span className={styles.topSeparator}>/</span>
                    <p className={styles.topLink}>Call Center</p>
                </div>
                <h2 className={styles.title}>Call Center</h2>
                <p className={styles.description}>Клиент наша ценность, поэтому наши операторы:</p>
                <div className={styles.iconList}>
                    <div className={styles.iconItem}>
                        <div className={styles.iconImage}>
                            <Image src="/call-center-icons/icon-1.svg" alt="Icon 1" width='37' height='38' />
                        </div>
                        <div className={styles.iconDescription}>
                            <p>имеют возможность работать в <span>дневную</span> и <span>ночную</span> смену</p>
                        </div>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconImage}>
                            <img src="/call-center-icons/icon-2.svg" alt="Icon 2"/>
                        </div>
                        <div className={styles.iconDescription}>
                            <p>говорят на <span>языке</span> клиента русском, кыргызском, узбекском, турецком</p>
                        </div>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconImage}>
                            <img src="/call-center-icons/icon-3.svg" alt="Icon 3"/>
                        </div>
                        <div className={styles.iconDescription}>
                            <p>для быстрой помощи умеют решать проблемы <span>MS Office</span></p>
                        </div>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconImage}>
                            <img src="/call-center-icons/icon-4.svg" alt="Icon 4"/>
                        </div>
                        <div className={styles.iconDescription}>
                            <p>говорят грамотно и умеют <span>налаживать контакт</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};