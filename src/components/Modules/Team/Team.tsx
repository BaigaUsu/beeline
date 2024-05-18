import { Title } from "@/components/UI/Heading/Heading";
import styles from "./team.module.scss";
import Image from "next/image";

export default function Team() {
  return (
    <div className={styles.wrap}>
      <Title>
        Команда <span className={styles.titleText}>Beeline</span>
      </Title>

      <div className={styles.carousel}>
        {/* <button className={`${styles.btn} ${styles.leftBtn}`} /> */}
        <Image className={styles.image} src='/team-image/first-img.png' alt="" width='820' height='440'/>
        <Image className={styles.image} src='/team-image/first-img.png' alt="" width='820' height='440'/>
        <Image className={styles.image} src='/team-image/first-img.png' alt="" width='820' height='440'/>
        {/* <button className={`${styles.btn} ${styles.rightBtn}`} /> */}
      </div>
    </div>
  );
}
