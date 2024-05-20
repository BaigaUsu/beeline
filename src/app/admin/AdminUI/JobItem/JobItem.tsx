'use client'
import React, { useState } from 'react';
import styles from './jobItem.module.scss';
import Switch from 'react-switch';

type JobItemProps = {
  position: string;
  level: string;
  salary: string;
  type: string;
  number: string;
  status: string;
};

const JobItem = ({ position, level, salary, type, number, status }: JobItemProps) => {
  const [isActive, setIsActive] = useState(status === 'Активен');

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <tr className={styles.jobItem}>
      <td>{position}</td>
      <td>{level}</td>
      <td>{salary}</td>
      <td>{type}</td>
      <td>{number}</td>
      <td>
        <Switch 
          onChange={handleToggle} 
          checked={isActive} 
          checkedIcon={false} 
          uncheckedIcon={false} 
          onColor="#ff9800"
          offColor="#ccc"
        />
      </td>
      <td>
        {isActive ? 'Активен' : 'Неактивен'}
      </td>
    </tr>
  );
};

export default JobItem;