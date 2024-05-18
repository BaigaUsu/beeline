import Image from "next/image";
import JobCard from "./Job-card/Card";
import styles from './jobs.module.scss'
import SearchField from "./Searchfield/SearchField";

export default function Jobs() {
    return (
    <div className={styles.wrap}>
        <SearchField/>
            <div className={styles.cardList}>
                <JobCard
                id="1"
                city="Ош"
                title="Специалист контакт центра"
                description="Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой,
        международной компании!"
                />
                <JobCard
                id="1"
                city="Ош"
                title="Специалист контакт центра"
                description="Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой,
        международной компании!"
                />
                <JobCard
                id="1"
                city="Ош"
                title="Специалист контакт центра"
                description="Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой,
        международной компании!"
                />
                <JobCard
                id="1"
                city="Ош"
                title="Специалист контакт центра"
                description="Ты подойдешь нам, даже если у тебя нет опыта работы. Начни свой путь в большой,
        международной компании!"
                />
        </div>
        <div className={styles.vaccancyBtnWrap}>
        <button className={styles.vaccancyBtn}>Все вакансии</button>
      </div>
      <Image src='/jobsIcons/ellipseSecondIcon.svg' alt="" className={styles.secondEllipse} width="317" height="809"/>
      </div>
    )
}