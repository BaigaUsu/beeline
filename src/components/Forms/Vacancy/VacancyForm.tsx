'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import styles from './vacancyForm.module.scss';
import ApiUrl from '@/app/api/apiList';
import CategoryUrl from '@/app/api/apiCategory';

type FormData = {
  position: string;
  salary: string;
  type: string;
  description: string;
  level: string;
  number: number;
  city: string;
  requirements: string;
  offer: string;
  status: string;
  category: number;
  experience: string;
  date: string;
};

interface VacancyFormProps {
  className?: string;
}

interface Category {
  id: number;
  name: string;
}

const VacancyForm: React.FC<VacancyFormProps> = ({ className }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { data: session } = useSession();
  const [categories, setCategories] = useState<Category[]>([]);

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

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(ApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${session?.user.token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        window.location.reload();
        window.scrollTo(0, 0);
      } else {
        console.error('Error submitting form data');
        console.error('Server response:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    reset(); 
    window.scrollTo(0, 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} method="post">
      <div className={styles.formGroup}>
        <label htmlFor="category" className={styles.label}>
          Категории {errors.category && <span className={styles.error}>*</span>}
        </label>
        <select id="category" {...register('category', { required: true })} className={styles.select}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="position" className={styles.label}>
          Должность {errors.position && <span className={styles.error}>*</span>}
        </label>
        <input
          id="position"
          {...register('position', { required: true })}
          placeholder="Должность"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="salary" className={styles.label}>
          Зарплата {errors.salary && <span className={styles.error}>*</span>}
        </label>
        <input
          type="number" 
          min="0" 
          id="salary"
          {...register('salary', { required: true })}
          placeholder="Зарплата"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="type" className={styles.label}>
          Тип работы {errors.type && <span className={styles.error}>*</span>}
        </label>
        <select id="type" {...register('type', { required: true })} className={styles.select}>
          <option value="офис">Офис</option>
          <option value="дом">Дома</option>
          <option value="свалка">Свалка</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Описание {errors.description && <span className={styles.error}>*</span>}
        </label>
        <textarea
          id="description"
          {...register('description')}
          placeholder="Пиши!!!"
          className={styles.textarea}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.label}>
          Номер {errors.number && <span className={styles.error}>*</span>}
        </label>
        <input 
          id="number" 
          type="number" 
          min='0'
          placeholder="367870" 
          className={styles.input} 
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="city" className={styles.label}>
          Город {errors.city && <span className={styles.error}>*</span>}
        </label>
        <select id="city" {...register('city', { required: true })} className={styles.select}>
          <option value="Бишкек">Бишкек</option>
          <option value="Ош">Ош</option>
          <option value="Бишкек/Ош">Бишкек/Ош</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="requirements" className={styles.label}>
          Требования {errors.requirements && <span className={styles.error}>*</span>}
        </label>
        <textarea 
          id="requirements" 
          {...register('requirements', { required: true })} 
          placeholder="Требования к вакансии" 
          className={styles.textarea} 
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="offer" className={styles.label}>
          Предложения {errors.offer && <span className={styles.error}>*</span>}
        </label>
        <textarea 
          id="offer" 
          {...register('offer')} 
          placeholder="Что мы предлагаем" 
          className={styles.textarea} 
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="status" className={styles.label}>
          Статус {errors.status && <span className={styles.error}>*</span>}
        </label>
        <select id="status" {...register('status', { required: true })} className={styles.select}>
          <option value="true">Открыта</option>
          <option value="false">Закрыта</option>
        </select>
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton}>
          Сохранить
        </button>
        <button type="button" className={styles.cancelButton} onClick={handleCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default VacancyForm;
