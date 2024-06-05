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
  const [showPositionWarning, setShowPositionWarning] = useState(false);
  const [showDescriptionWarning, setShowDescriptionWarning] = useState(false);
  const [showRequirementsWarning, setShowRequirementsWarning] = useState(false);
  const [showOfferWarning, setShowOfferWarning] = useState(false);
  const [showNumberWarning, setShowNumberWarning] = useState(false);

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
    if (name === 'position' && value.length > 50) {
      setShowPositionWarning(true);
      return;
    } else {
      setShowPositionWarning(false);
    }
    
    if ((name === 'requirements' || name === 'description' || name === 'offer') && value.length > 1000) {
      if (name === 'requirements') setShowRequirementsWarning(true);
      if (name === 'description') setShowDescriptionWarning(true);
      if (name === 'offer') setShowOfferWarning(true);
      return;
    } else {
      if (name === 'requirements') setShowRequirementsWarning(false);
      if (name === 'description') setShowDescriptionWarning(false);
      if (name === 'offer') setShowOfferWarning(false);
    }
    
    if (name === 'number' && value.length > 5) {
      setShowNumberWarning(true);
      return;
    } else {
      setShowNumberWarning(false);
    }

    if (name === 'salary') {
      const validationResult = validate(value);
      if (validationResult !== true) {
        setErrors({ ...errors, salary: validationResult });
      } else {
        setErrors({ ...errors, salary: undefined });
      }
    }

    setJob({ ...job, [name]: value });
    if (name === 'position') {
      validatePosition(value);
    } 
    if (name === 'category') {
      validateCategory(value);
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

  const validate = (value: string) => {
    if (value === '' || value === undefined) {
      return true;
    }
    const sanitizedValue = value.replace(/[^\d-]/g, '');
    const [min, max] = sanitizedValue.split('-');
    if (!min) {
      return true;
    }
    const minValue = parseFloat(min);
    if (isNaN(minValue)) {
      return true;
    }
    if (minValue > 1000000) {
      return 'Максимальная зарплата 1 000 000';
    }
    if (!max) {
      return true;
    }
    const maxValue = parseFloat(max);
    if (isNaN(maxValue)) {
      return true;
    }
    if (maxValue > 1000000) {
      return 'Максимальная зарплата 1 000 000';
    }
    return true;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const session = await getSession();
      if (!session) {
        throw new Error("Session is not available");
      }

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
        {showPositionWarning && <span className={styles.error}>Максимальное количество символов - 50</span>} 
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="salary" className={styles.label}>
          Зарплата 
        </label>
        <input
          name='salary'
          min="0" 
          id="salary"
          placeholder="Зарплата"
          className={styles.input}
          value={job.salary} onChange={handleChange}
        />
        {errors.salary && <span className={styles.error}>{errors.salary}</span>}
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
        {showDescriptionWarning && <span className={styles.error}>Максимальное количество символов - 1000</span>}
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
        {showNumberWarning && <span className={styles.error}>Максимальное количество символов - 5</span>} 
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
        {showRequirementsWarning && <span className={styles.error}>Максимальное количество символов - 1000</span>}
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
        {showOfferWarning && <span className={styles.error}>Максимальное количество символов - 1000</span>}
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
          Удалить
        </button>
      </div>
    </form>
    </div>
  );
};

export default EditForm;
