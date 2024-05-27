'use client'

import React, { useState } from "react";
import styles from "./searchbar.module.scss";
import Image from "next/image";

export const UiSearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div onSubmit={handleSearch} className={styles.form}>
      <div className={styles.wrap}>
        <Image src='/jobsIcons/searchIcon.svg' alt="searchIcon" width="24" height="24" className={styles.logo}/>
        <input
          type="text"
          placeholder="Frontend разработчик"
          className={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

