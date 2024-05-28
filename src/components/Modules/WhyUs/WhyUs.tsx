import { Title } from "@/components/UI/Heading/Heading";
import styles from "./whyUs.module.scss";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className={styles.wrap}>
      <Title className={styles.title}>Почему мы?</Title>
      <div className={styles.iconsWrap}>
        <div className={styles.iconsFirst}>
          <div className={styles.circleContainer}>
            <Image src='/why-us/icon-1.svg' alt='' width={83.33} height={86.46} className={styles.icon}/>
            <span className={styles.iconText}>Масштабные проекты</span>
          </div>
          <div className={styles.circleContainer}>
            <Image src='/why-us/icon-2.svg' alt='' width={83.33} height={83.33} className={styles.icon}/>
            <span className={styles.iconText}>Развитие карьерного роста</span>
          </div>
          <div className={styles.circleContainer}>
            <Image src='/why-us/icon-3.svg' alt='' width="100" height="100" className={styles.icon}/>
            <span className={styles.iconText}>Оплачиваемая сотовая связь</span>
          </div>
        </div>
        <div className={styles.iconsSecond}>
          <div className={styles.circleContainer}>
            <Image src='/why-us/icon-4.svg' alt='' width="87" height="84" className={styles.icon}/>
            <span className={styles.iconText}>Уют стабильность честность</span>
          </div>
          <div className={styles.circleContainer}>
            <Image src='/why-us/icon-5.svg' alt='' width="71" height="84" className={styles.icon}/>
            <span className={styles.iconText}>Поощрение твоих идей</span>
          </div>
        </div>
      </div>
    </div>
  );
}