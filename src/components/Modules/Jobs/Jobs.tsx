import Image from "next/image";
import styles from './jobs.module.scss'
import SearchField from "./Searchfield/SearchField";
import JobList from "./Job-card/Card";

export default function Jobs() {
    return (
    <div className={styles.wrap}>
        <SearchField/>
          <div className={styles.cardList}>
            <JobList
          />
        </div>
        <div className={styles.vaccancyBtnWrap}>
          <button className={styles.vaccancyBtn}>Все вакансии</button>
        </div>
      <Image src='/jobsIcons/ellipseSecondIcon.svg' alt="" className={styles.secondEllipse} width="317" height="809"/>
      </div>
    )
}