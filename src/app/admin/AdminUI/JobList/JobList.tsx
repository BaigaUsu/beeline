'use client';
import React, { useEffect, useState } from 'react';
import styles from './jobList.module.scss';
import JobItem from '../JobItem/JobItem';
import Image from 'next/image';
import Switch from 'react-switch';
import ApiUrl from '@/app/api/apiList';
import CategoryUrl from '@/app/api/apiCategory'; // Import the URL for fetching categories

interface Job {
  id: number;
  position: string;
  level: string;
  salary: string;
  type: string;
  number: string;
  status: boolean;
  category: number;
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
  const [globalActive, setGlobalActive] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filterCategory, setFilterCategory] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<string | null>(null);
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
      await fetch(`${ApiUrl}/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      setJobs(jobs.map(job => job.id === id ? { ...job, status } : job));
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  const handleGlobalToggle = () => {
    setGlobalActive(!globalActive);
  };

  const handleSort = (key: keyof Job) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (filter: 'type' | 'level' | 'status' | 'salary' | 'category') => (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (filter === 'type') {
      setFilterType(value);
    } else if (filter === 'level') {
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
    return parseInt(salary.replace(/[^0-9]/g, ''), 10);
  };

  const getSalaryRange = (range: string): [number, number] | string => {
    if (range === "2000") {
      return "2000+";
    }
    const [min, max] = range.split('-').map(str => parseInt(str.replace(/[^0-9]/g, ''), 10));
    return [min, max];
  };

  const sortedJobs = React.useMemo(() => {
    let filteredJobs = jobs;

    if (filterCategory !== null) {
      filteredJobs = filteredJobs.filter(job => job.category === filterCategory);
    }

    if (filterType) {
      filteredJobs = filteredJobs.filter(job => job.type === filterType);
    }

    if (filterLevel) {
      filteredJobs = filteredJobs.filter(job => job.level === filterLevel);
    }

    if (filterStatus !== null) {
      filteredJobs = filteredJobs.filter(job => job.status === filterStatus);
    }

    if (filterSalaryRange) {
      const salaryRange = getSalaryRange(filterSalaryRange);
      filteredJobs = filteredJobs.filter(job => {
        const salary = parseSalary(job.salary);
        if (salaryRange === "2000+") {
          return salary > 2000;
        } else {
          const [minSalary, maxSalary] = salaryRange as [number, number];
          return salary >= minSalary && salary <= maxSalary;
        }
      });
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
  }, [jobs, sortConfig, filterCategory, filterType, filterLevel, filterStatus, filterSalaryRange]);

  return (
    <div className={`${styles.jobList} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
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
            <th>
              <div className={styles.filterContainer}>
                Уровень
                <select onChange={handleFilterChange('level')}>
                  <option value="">Все</option>
                  <option value="easy">easy</option>
                  <option value="Middle">middle</option>
                  <option value="hard">hard</option>
                </select>
              </div>
            </th>
            <th>
              <div className={styles.filterContainer}>
                Зарплата
                <select onChange={handleFilterChange('salary')}>
                  <option value="">Все</option>
                  <option value="1-100">1$ - 100$</option>
                  <option value="100-500">100$ - 500$</option>
                  <option value="500-1000">500$ - 1000$</option>
                  <option value="1500-2000">1500$ - 2000$</option>
                  <option value="2000">2000$ и больше</option>
                </select>
              </div>
            </th>
            <th>
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
            <th onClick={() => handleSort('number')}>
              <div className={styles.filterContainer}>
                <div className={styles.filterElement}>
                  Номер 
                  <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' className={styles.icon}/>
                </div>
              </div>
            </th>
            <th>
              <Switch onChange={handleGlobalToggle} checked={globalActive} checkedIcon={false} uncheckedIcon={false} onColor="#ff9800" offColor="#ccc" />
            </th>
            <th>
              <div className={styles.filterContainer}>
                Статус
                <select onChange={handleFilterChange('status')}>
                  <option value="">Все</option>
                  <option value="true">Активен</option>
                  <option value="false">Неактивен</option>
                </select>
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
              level={job.level}
              salary={job.salary}
              type={job.type}
              number={job.number}
              status={job.status}
              onStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
