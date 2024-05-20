'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './vacancyForm.module.scss';

type FormData = {
  position: string;
  salary: string;
  jobType: string;
  description: string;
};
interface VacancyFormProps {
  className?: string;
}

const VacancyForm: React.FC<VacancyFormProps> = ({ className }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="position" className={styles.label}>Должность</label>
        <select id="position" {...register('position', { required: true })} className={styles.select}>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Loh">Loh</option>
        </select>
        {errors.position && <span className={styles.error}>This field is required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="salary" className={styles.label}>Зарплата</label>
        <input
          id="salary"
          {...register('salary', { required: true })}
          placeholder="1000$"
          className={styles.input}
        />
        {errors.salary && <span className={styles.error}>This field is required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="jobType" className={styles.label}>Тип работы</label>
        <select id="jobType" {...register('jobType', { required: true })} className={styles.select}>
          <option value="Офис">Офис</option>
          <option value="Дома">Дома</option>
          <option value="На свалке">На свалке</option>
        </select>
        {errors.jobType && <span className={styles.error}>This field is required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Описание</label>
        <textarea
          id="description"
          {...register('description')}
          placeholder="Пиши!!!"
          className={styles.textarea}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton}>Сохранить</button>
        <button type="button" className={styles.cancelButton}>Отмена</button>
      </div>
    </form>
  );
};

export default VacancyForm;