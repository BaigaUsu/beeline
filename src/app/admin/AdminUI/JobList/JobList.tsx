'use client'
import React, { useState } from 'react';
import styles from './jobList.module.scss';
import JobItem from '../JobItem/JobItem';
import Image from 'next/image';
import Switch from 'react-switch';

interface JobListProps {
  className?: string;
}

const JobList: React.FC<JobListProps> = ({ className }) => {
  const [globalActive, setGlobalActive] = useState(false);

  const jobs = Array(10).fill({
    position: 'Frontend',
    level: 'Middle',
    salary: '100$-1000$',
    type: 'Офис',
    number: '3673870',
    status: 'Активен',
  });

  const handleGlobalToggle = () => {
    setGlobalActive(!globalActive);
  };

  return (
    <div className={`${styles.jobList} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Вакансия <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14'/></th>
            <th>Уровень <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14'/></th>
            <th>Зарплата <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14'/></th>
            <th>Тип <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14'/></th>
            <th>Номер <Image src='/admin-icons/icon-9.svg' alt='' width='14' height='14'/></th>
            <th>
              <Switch 
                onChange={handleGlobalToggle} 
                checked={globalActive} 
                checkedIcon={false} 
                uncheckedIcon={false} 
                onColor="#ff9800"
                offColor="#ccc"
              />
            </th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <JobItem key={index} {...job} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;