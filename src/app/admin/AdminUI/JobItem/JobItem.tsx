import React, { useState, useEffect } from 'react';
import styles from './jobItem.module.scss';
import Switch from 'react-switch';

interface JobProps {
  id: number;
  position: string;
  level: string;
  salary: string;
  type: string;
  number: string;
  status: boolean;
  onStatusChange: (id: number, status: boolean) => void;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const JobItem: React.FC<JobProps> = ({ id, position, level, salary, type, number, status, onStatusChange }) => {
  const [isActive, setIsActive] = useState(status);

  const handleToggle = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    onStatusChange(id, newStatus); 
  };

  useEffect(() => {
    setIsActive(status);  
  }, [status]);

  return (
    <tr className={styles.jobItem}>
      <td>{position}</td>
      <td>{level}</td>
      <td>{salary}</td>
      <td>{capitalizeFirstLetter(type)}</td>
      <td>{number}</td>
      <td>
        <Switch onChange={handleToggle} checked={isActive} checkedIcon={false} uncheckedIcon={false} onColor="#ff9800" offColor="#ccc" />
      </td>
      <td>{isActive ? 'Активен' : 'Неактивен'}</td>
    </tr>
  );
};

export default JobItem;