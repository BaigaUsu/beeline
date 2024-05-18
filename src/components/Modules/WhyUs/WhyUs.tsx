import { Title } from "@/components/UI/Heading/Heading";
import styles from "./whyUs.module.scss";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className={styles.wrap}>
      <Title className={styles.title}>Почему мы?</Title>
        <div className={styles.iconsWrap}>
            <div className={styles.iconsFirst}>
                <Image src='/why-us/icon-1.svg' alt='' width="200" height="200" className={styles.icon}/>
                <Image src='/why-us/icon-2.svg' alt='' width="200" height="200" className={styles.icon}/>
                <Image src='/why-us/icon-3.svg' alt='' width="200" height="200" className={styles.icon}/>
            </div>
            <div>
                <Image src='/why-us/icon-4.svg' alt='' width="200" height="200" className={styles.icon}/>
                <Image src='/why-us/icon-5.svg' alt='' width="200" height="200" className={styles.icon}/>
            </div>
        </div>
    </div>
  );
}