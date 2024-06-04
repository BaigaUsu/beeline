'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import styles from './editForm.module.scss';
import ApiUrl from '@/app/api/apiList';
import { getSession } from 'next-auth/react';
import CategoryUrl from '@/app/api/apiCategory';

interface Errors {
  position?: string; 
  category?: string;
  salary?: string;
  type?: string;
  requirements?: string;
  city?: string;
}


interface EditFormProps {
  className?: string;
}

const EditForm: React.FC<EditFormProps> = ({ className }) => {
  const [errors, setErrors] = useState<Errors>({});
  const { id } = useParams(); 
  const [job, setJob] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      fetchJob();
      fetchCategories();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const session = await getSession();
      if (!session || !id) {
        throw new Error("Session or ID is not available");
      }

      const response = await fetch(`${ApiUrl}/${id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session.user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJob(data);
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const session = await getSession();
      const response = await fetch(CategoryUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session?.user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
    if (name === 'position') {
      validatePosition(value);
    } 
    if (name === 'category') {
      validateCategory(value);
    } 
    if (name === 'salary') {
      validateSalary(value);
    } 
    if (name === 'type') {
      validateType(value);
    } 
    if (name === 'requirements') {
      validateRequirements(value);
    } 
    if (name === 'city') {
      validateCity(value);
    } 
  };

  const validatePosition = (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, position: '* Обязательно' });
    } else {
      setErrors({ ...errors, position: undefined });
    }
  };

  const validateCategory= (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, category: '* Обязательно' });
    } else {
      setErrors({ ...errors, category: undefined });
    }
  };

  const validateSalary= (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, salary: '* Обязательно' });
    } else {
      setErrors({ ...errors, salary: undefined });
    }
  };

  const validateType= (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, type: '* Обязательно' });
    } else {
      setErrors({ ...errors, type: undefined });
    }
  };
  
  const validateCity= (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, city: '* Обязательно' });
    } else {
      setErrors({ ...errors, city: undefined });
    }
  };
  
  const validateRequirements= (value: string) => {
    if (!value.trim()) {
      setErrors({ ...errors, requirements: '* Обязательно' });
    } else {
      setErrors({ ...errors, requirements: undefined });
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const session = await getSession();
      if (!session) {
        throw new Error("Session is not available");
      }

      // Convert date to correct format
      const formattedJob = { ...job, date: new Date(job.date).toISOString() };

      console.log('Submitting updated job:', formattedJob); 

      const response = await fetch(`${ApiUrl}/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session.user.token}`,
        },
        body: JSON.stringify(formattedJob),
      });

      const responseData = await response.json();
      console.log('Server response:', responseData); 

      if (response.ok) {
        window.location.href = '/admin';
      } else {
        console.error('Failed to update job:', responseData);
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const session = await getSession();
      if (!session) {
        throw new Error("Session is not available");
      }

      const response = await fetch(`${ApiUrl}/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session.user.token}`,
        },
      });

      if (response.ok) {
        window.location.href = '/admin';
      } else {
        console.error('Failed to delete job:', response.status);
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.editForm} ${className}`}>
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="category" className={styles.label}>
          Категории 
        </label>
        <select id="category" name='category' className={styles.select} value={job.category} onChange={handleChange} required>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          {errors.category && <span className={styles.error}>{errors.category}</span>}
        </select>          
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="position" className={styles.label}>
          Должность {errors.position && <span className={styles.error}>{errors.position}</span>} 
        </label>
        <input
          required
          type='text'
          id="position"
          name='position'
          placeholder="Должность"
          className={styles.input}
          value={job.position} onChange={handleChange}
        />      
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="salary" className={styles.label}>
          Зарплата {errors.salary && <span className={styles.error}>{errors.salary}</span>}
        </label>
        <input
          name='salary'
          type="number" 
          min="0" 
          id="salary"
          placeholder="Зарплата"
          className={styles.input}
          value={job.salary} onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="type" className={styles.label}>
          Тип работы {errors.type && <span className={styles.error}>{errors.type}</span>}
        </label>
        <select id="type" name='type' className={styles.select} value={job.type} onChange={handleChange} required>
          <option value="офис">Офис</option>
          <option value="дом">Дома</option>
          <option value="свалка">Свалка</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Описание 
        </label>
        <textarea
          name='description'
          id="description"
          placeholder="Пиши!!!"
          className={styles.textarea}
          value={job.description} onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.label}>
          Номер 
        </label>
        <input 
          name='number'
          id="number" 
          type="number" 
          min='0'
          placeholder="367870" 
          className={styles.input} 
          value={job.number} onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="city" className={styles.label}>
          Город {errors.city && <span className={styles.error}>{errors.city}</span>}
        </label>
        <select id="city" name="city" className={styles.select} value={job.city} onChange={handleChange} required>
          <option value="Бишкек">Бишкек</option>
          <option value="Ош">Ош</option>
          <option value="Бишкек/Ош">Бишкек/Ош</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="requirements" className={styles.label}>
          Требования {errors.requirements && <span className={styles.error}>{errors.requirements}</span>}
        </label>
        <textarea 
          name='requirements'
          id="requirements"  
          placeholder="Требования к вакансии" 
          className={styles.textarea} 
          value={job.requirements} onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="offer" className={styles.label}>
          Предложения 
        </label>
        <textarea 
          name='offer'
          id="offer"
          placeholder="Что мы предлагаем" 
          className={styles.textarea} 
          value={job.offer} onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="status" className={styles.label}>
          Статус 
        </label>
        <select id="status" name='status' className={styles.select} value={job.status} onChange={handleChange}>
          <option value="true">Открыта</option>
          <option value="false">Закрыта</option>
        </select>
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton}>
          Сохранить
        </button>
        <button className={styles.cancelButton} onClick={handleDelete}>
          Delete Job
        </button>
      </div>
    </form>
    </div>
  );
};

export default EditForm;
