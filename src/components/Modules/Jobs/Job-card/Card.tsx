
import Button from "@/components/UI/Button/Button";
import styles from "./card.module.scss";
import Image from "next/image";

export type JobCardProps = {
  id: string;
  city: string;
  title: string;
  description: string;
};

export default function JobCard({
  id,
  city,
  title,
  description,
}: JobCardProps) {
  return (
    <div className={styles.wrap}>
      <p className={styles.city}>
        <Image src='/jobsIcons/locationIcon.svg' alt="Location Icon" width="20" height="20"/>
        <span className={styles.cityText}>г.{city}</span>
      </p>
      <div className={styles.contentWrap}>
        <h4 className={styles.title}> {title}</h4>
        <p className={styles.description}>{description}</p>
        <Button variant="more">Подробнее</Button>
      </div>
    </div>
  );
}


