import Image from 'next/image';
import styles from './picture.module.scss';

export default function Picture () {
  return (
<div className={styles.lifeSection}>
    <div className={styles.wrapper}>
        <div className={styles.container}>
                <div className={styles.lifeSectionInner}>
                    <div className={styles.imageContainer}>
                        <Image src="/call-center-icons/image.png" alt="" width='930' height='561' className={styles.image}
                        />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className={styles.lifeTitle}>Жизнь в КЦ Beeline</h3>
                        <p className={styles.lifeDescription}>
                            Посмотрите видео о жизни сотрудников в КЦ Beeline и других интересных
                            вещах, которые Вы найдете только у нас!
                        </p>
                        <button className={styles.watchVideoButton}>Смотреть видео
                            <Image src='/call-center-icons/icon-5.svg' alt='' width='36' height='36' />
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
  );
};