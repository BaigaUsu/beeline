'use client'
import React, { useState } from 'react';
import Image from "next/image";
import styles from './jobs.module.scss';
import SearchField from "./Searchfield/SearchField";
import JobList from "./Job-card/Card";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.wrap}>
      <SearchField setSearchTerm={setSearchTerm} />
      <div className={styles.cardList}>
        <JobList searchTerm={searchTerm} />
      </div>
      <div className={styles.vaccancyBtnWrap}>
        <button className={styles.vaccancyBtn}>Все вакансии</button>
      </div>
    </div>
  );
}