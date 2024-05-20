import Image from 'next/image';
import styles from './listHead.module.scss';
import Link from 'next/link';

interface ListHeadProps {
  className?: string;
}

const ListHead: React.FC<ListHeadProps> = ({ className }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Список вакансий</div>
      <div className={styles.profile}>
          <Link href='/admin/add/newVacancy' className={styles.btn1}><p>Добавить вакансию</p> <Image src='/admin-icons/icon-7.svg' alt='' width='24' height='24'/></Link>
          <button className={styles.btn2}><p>Редактировать</p> <Image src='/admin-icons/icon-8.svg' alt='' width='24' height='24'/></button>
      </div>
    </header>
  );
};

export default ListHead;