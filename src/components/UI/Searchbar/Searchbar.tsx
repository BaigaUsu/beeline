'use client'
import React, { useState } from "react";
import styles from "./searchbar.module.scss";
import Image from "next/image";

interface UiSearchBarProps {
  setSearchTerm: (term: string) => void;
}

export const UiSearchBar: React.FC<UiSearchBarProps> = ({ setSearchTerm }) => {
  const [searchTerm, setLocalSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setLocalSearchTerm(term);
    setSearchTerm(term);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.wrap}>
        <Image src='/jobsIcons/searchIcon.svg' alt="searchIcon" width="24" height="24" className={styles.logo}/>
        <input
          type="text"
          placeholder="Frontend разработчик"
          className={styles.input}
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
};