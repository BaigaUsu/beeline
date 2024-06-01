'use client'
import React, { useState } from 'react';
import Image from "next/image";
import styles from './jobs.module.scss';
import SearchField from "./Searchfield/SearchField";
import JobList from "./Job-card/Card";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAllJobs, setShowAllJobs] = useState<boolean>(false);

  return (
    <div className={styles.wrap}>
      <SearchField setSearchTerm={setSearchTerm} />
      <div className={styles.cardList}>
        <JobList searchTerm={searchTerm} showAllJobs={showAllJobs} />
      </div>
      <div className={styles.vaccancyBtnWrap}>
        <button
          className={styles.vaccancyBtn}
          onClick={() => setShowAllJobs(!showAllJobs)}
        >
          {showAllJobs ? 'Скрыть вакансии' : 'Все вакансии'}
        </button>
      </div>
    </div>
  );
}
