'use client';
import React, { useState, useEffect } from 'react';
import styles from './jobs.module.scss';
import SearchField from "./Searchfield/SearchField";
import JobList from "./Job-card/Card";
import CategoryUrl from '@/app/api/apiCategory';

interface Category {
  id: number;
  name: string;
}

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAllJobs, setShowAllJobs] = useState<boolean>(false);
  const [category, setCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredJobsCount, setFilteredJobsCount] = useState<number>(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(CategoryUrl);
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleFilteredJobsCount = (count: number) => {
    setFilteredJobsCount(count);
  };

  return (
    <div className={styles.wrap}>
      <SearchField 
        setSearchTerm={setSearchTerm} 
        setCategory={setCategory} 
        categories={categories}
        selectedCategory={category}
      />
      <div className={styles.cardList}>
        <JobList 
          searchTerm={searchTerm} 
          showAllJobs={showAllJobs} 
          category={category}
          onFilteredJobsCountChange={handleFilteredJobsCount}
        />
      </div>
      {filteredJobsCount > 4 && (
        <div className={styles.vaccancyBtnWrap}>
          <button
            className={styles.vaccancyBtn}
            onClick={() => setShowAllJobs(!showAllJobs)}
          >
            {showAllJobs ? 'Скрыть вакансии' : 'Все вакансии'}
          </button>
        </div>
      )}
    </div>
  );
}
