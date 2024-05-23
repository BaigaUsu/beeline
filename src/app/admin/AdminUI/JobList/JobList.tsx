'use client'
import React, { useEffect, useState } from 'react';
import styles from './jobList.module.scss';
import JobItem from '../JobItem/JobItem';
import Image from 'next/image';
import Switch from 'react-switch';
import ApiUrl from '@/app/api/values';

interface Job {
  name: string;
  level: string;
  salary: string;
  type: string;
  number: string;
  status: string;
}

interface JobListProps {
  className?: string;
}

const JobList: React.FC<JobListProps> = ({ className }) => {
  const [globalActive, setGlobalActive] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchJobs();
      setJobs(data);
    }
    fetchData();
  }, []);

  async function fetchJobs() {
    const response = await fetch(ApiUrl);
    const data = await response.json();
    return data;
  }

  const handleGlobalToggle = () => {
    setGlobalActive(!globalActive);
  };

  return (
    <div className={`${styles.jobList} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Вакансия <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' /></th>
            <th>Уровень <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' /></th>
            <th>Зарплата <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' /></th>
            <th>Тип <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' /></th>
            <th>Номер <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14' /></th>
            <th>
              <Switch onChange={handleGlobalToggle} checked={globalActive} checkedIcon={false} uncheckedIcon={false} onColor="#ff9800" offColor="#ccc" />
            </th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <JobItem
              key={index}
              name={job.name}
              level={job.level}
              salary={job.salary}
              type={job.type}
              number={job.number}
              status={job.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;