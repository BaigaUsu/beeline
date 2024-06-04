'use client'
import React, { useEffect, useState } from 'react';
import styles from './jobList.module.scss';
import JobItem from '../JobItem/JobItem';
import ApiUrl from '@/app/api/apiList';
import CategoryUrl from '@/app/api/apiCategory'; // Import the URL for fetching categories
import { getSession, useSession } from 'next-auth/react';

interface Job {
  id: number;
  position: string;
  city: string;
  salary: string;
  type: string;
  number: string;
  status: boolean;
  category: number;
  date: number;
}

interface Category {
  id: number;
  name: string;
}

interface JobListProps {
  className?: string;
}

type SortConfig = {
  key: keyof Job;
  direction: 'ascending' | 'descending';
};

const JobList: React.FC<JobListProps> = ({ className }) => {
  const { data: session } = useSession();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filterCategory, setFilterCategory] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterCity, setFilterLevel] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<boolean | null>(null);
  const [filterSalaryRange, setFilterSalaryRange] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
    fetchCategories();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(ApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: Job[] = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(CategoryUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleStatusChange = async (id: number, status: boolean) => {
    try {
      const session = await getSession(); 

      await fetch(`${ApiUrl}/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session?.user.token}`
        },
        body: JSON.stringify({ status }),
      });
      setJobs(jobs.map(job => job.id === id ? { ...job, status } : job));
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  const handleSort = (key: keyof Job) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (filter: 'type' | 'city' | 'status' | 'salary' | 'category') => (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (filter === 'type') {
      setFilterType(value);
    } else if (filter === 'city') {
      setFilterLevel(value);
    } else if (filter === 'status') {
      setFilterStatus(value === 'true' ? true : value === 'false' ? false : null);
    } else if (filter === 'salary') {
      setFilterSalaryRange(value);
    } else if (filter === 'category') {
      setFilterCategory(value ? parseInt(value, 10) : null);
    }
  };

  const parseSalary = (salary: string): number => {
    return parseFloat(salary.replace(/[^0-9]/g, ''));
  };

  const getSalaryRange = (range: string): [number, number] | null => {
    const parts = range.split('-').map(part => part.trim());
    if (parts.length === 2) {
      const minSalary = parseSalary(parts[0]);
      const maxSalary = parseSalary(parts[1]);
      return [minSalary, maxSalary];
    }
    return null;
  };

  const sortedJobs = React.useMemo(() => {
    let filteredJobs = jobs;

    if (filterCategory !== null) {
      filteredJobs = filteredJobs.filter(job => job.category === filterCategory);
    }

    if (filterType) {
      filteredJobs = filteredJobs.filter(job => job.type === filterType);
    }

    if (filterCity) {
      filteredJobs = filteredJobs.filter(job => job.city === filterCity);
    }

    if (filterStatus !== null) {
      filteredJobs = filteredJobs.filter(job => job.status === filterStatus);
    }

    if (filterSalaryRange) {
      const salaryRange = getSalaryRange(filterSalaryRange);
      if (salaryRange) {
        const [minSalary, maxSalary] = salaryRange;
        filteredJobs = filteredJobs.filter(job => {
          const salary = parseSalary(job.salary);
          return salary >= minSalary && salary <= maxSalary;
        });
      } else {
        const minSalary = parseSalary(filterSalaryRange);
        filteredJobs = filteredJobs.filter(job => {
          const salary = parseSalary(job.salary);
          return salary >= minSalary;
        });
      }
    }

    if (!sortConfig) return filteredJobs;

    return [...filteredJobs].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [jobs, sortConfig, filterCategory, filterType, filterCity, filterStatus, filterSalaryRange]);

  return (
    <div className={`${styles.jobList} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.category}>
              <div className={styles.filterContainer}>
                Категория
                <select onChange={handleFilterChange('category')}>
                  <option value="">Все</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </th>
            <th className={styles.city}>
              <div className={styles.filterContainer}>
                Город
                <select onChange={handleFilterChange('city')}>
                  <option value="">Все</option>
                  <option value="Бишкек">Бишкек</option>
                  <option value="Ош">Ош</option>
                  <option value="Бишкек/Ош">Бишкек/Ош</option>
                </select>
              </div>
            </th>
            <th className={styles.salary}>
              <div className={styles.filterContainer}>
                Зарплата
                <select onChange={handleFilterChange('salary')}>
                  <option value="">Все</option>
                  <option value="20.000">от 20 000 сомов</option>
                  <option value="40.000">от 40.000 сомов</option>
                  <option value="60.000">от 60 000 сомов</option>
                  <option value="80.000">от 80 000 сомов</option>
                  <option value="100.000">от 100 000 сомов</option>
                </select>
              </div>
            </th>
            <th className={styles.type}>
              <div className={styles.filterContainer}>
                Тип
                <select onChange={handleFilterChange('type')}>
                  <option value="">Все</option>
                  <option value="офис">Офис</option>
                  <option value="дом">Дом</option>
                  <option value="свалка">Свалка</option>
                </select>
              </div>
            </th>
            <th onClick={() => handleSort('number')} className={styles.number}>
              <div className={styles.filterContainer}>
                <div className={styles.filterElement}>
                  Номер 
                </div>
              </div>
            </th>
            <th className={styles.status}>
              <div className={styles.filterContainer}>
                Статус
              </div>
            </th>
            <th className={styles.date}>
              <div className={styles.filterContainer}>
                Дата
              </div>
            </th>
            <th className={styles.edit}>
              <div className={styles.filterContainer}>
                <div className={styles.filterElement}>
                  Редак-ть
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedJobs.map((job) => (
            <JobItem
              key={job.id}
              id={job.id}
              position={job.position}
              city={job.city}
              salary={job.salary}
              type={job.type}
              number={job.number}
              status={job.status}
              date={job.date}
              onStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;