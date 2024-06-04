'use client'
import Image from 'next/image';
import styles from './listHead.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ListHeadProps {
  className?: string;
}

const ListHead: React.FC<ListHeadProps> = ({ className }) => {
  const pathname = usePathname();

  let title;
  if (pathname === '/admin/add/VacancyForm') {
    title = 'Добавить вакансию';
  } else if (/^\/admin\/edit\/[^\/]+$/.test(pathname)) {
    title = 'Редактировать вакансию';
  } else {
    title = 'Список вакансий';
  }

  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
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
