'use client'
import React from 'react';
import { UiSearchBar } from "@/components/UI/Searchbar/Searchbar";
import { MainTitle } from "@/components/UI/Heading/Heading";
import styles from "./searchField.module.scss";

interface Category {
  id: number;
  name: string;
}

interface SearchFieldProps {
  setSearchTerm: (term: string) => void;
  setCategory: (category: number | null) => void;
  categories: Category[];
  selectedCategory: number | null;
}

export default function SearchField({ setSearchTerm, setCategory, categories, selectedCategory }: SearchFieldProps) {
  const handleCategoryClick = (categoryId: number) => {
    setCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <div className={styles.titleWrap}>
        <MainTitle>
          Работа с <span className={styles.titleSpan}>Beeline</span>
        </MainTitle>
        <p className={styles.description}>найди работу прямо сейчас!</p>
      </div>
      <div>
        <UiSearchBar setSearchTerm={setSearchTerm} />
      </div>
      <div className={styles.btnsWrapper}>
        <div className={styles.btnGrid}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.btn} ${styles.btn1} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}