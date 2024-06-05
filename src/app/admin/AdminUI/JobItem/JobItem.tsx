'use client';

import React, { useEffect, useState } from 'react';
import styles from './jobItem.module.scss';
import Switch from 'react-switch';
import Image from 'next/image';
import Link from 'next/link';

interface JobProps {
  id: number;
  position: string;
  city: string;
  salary: string;
  type: string;
  number: string;
  status: boolean;
  date: number;
  onStatusChange: (id: number, status: boolean) => void;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const JobItem: React.FC<JobProps> = ({ id, position, city, salary, type, number, status, date, onStatusChange }) => {
  const [isActive, setIsActive] = useState(status);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = async () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    setIsUpdating(true);
    try {
      await onStatusChange(id, newStatus); 
    } catch (error) {
      setIsActive(!newStatus);
    }
    setIsUpdating(false);
  };

  useEffect(() => {
    setIsActive(status);  
  }, [status]);

  return (
    <tr className={styles.jobItem}>
      <td className={styles.position}>{position}</td>
      <td className={styles.level}>{city}</td>
      <td className={styles.salary}>{salary}</td>
      <td className={styles.type}>{capitalizeFirstLetter(type)}</td>
      <td className={styles.number}>{id}</td>
      <td className={styles.status}>
        <Switch 
          onChange={handleToggle} 
          checked={isActive} 
          checkedIcon={false} 
          uncheckedIcon={false} 
          onColor="#ffcc33" 
          offColor="#ccc" 
          disabled={isUpdating}
        />
        <span>{isActive ? 'Активен' : 'Неактивен'}</span>
      </td>
      <td className={styles.date}>{date}</td>
      <td className={styles.editIcon}>
        <Link href={`/admin/edit/${id}`} className={styles.bg}>
          <Image src='/admin-icons/icon-8.svg' alt='Edit' width='20' height='20'/>
        </Link>
      </td>
    </tr>
  );
};

export default JobItem;
