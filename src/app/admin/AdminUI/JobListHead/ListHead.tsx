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
          <Link 
            href='/admin/add/VacancyForm' 
            className={styles.btn1}
            >
              <p>Добавить вакансию</p> 
              <Image src='/admin-icons/icon-7.svg' alt='' width='24' height='24'/>
          </Link>
      </div>
    </header>
  );
};

export default ListHead;