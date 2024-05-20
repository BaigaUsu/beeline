import Image from 'next/image';
import styles from './sidebar.module.scss';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Sidebar: React.FC<HeaderProps> = ({ className }) => {
  return (
    <>
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <Link href='/admin'><li className={styles.active}><Image src='/admin-icons/icon-1.svg' alt='' width='24' height='24'/>Вакансии</li></Link>
          <li><Image src='/admin-icons/icon-2.svg' alt='' width='24' height='24'/>Product</li>
          <li><Image src='/admin-icons/icon-3.svg' alt='' width='24' height='24'/>Customers</li>
          <li><Image src='/admin-icons/icon-4.svg' alt='' width='24' height='24'/>Income</li>
          <li><Image src='/admin-icons/icon-5.svg' alt='' width='24' height='24'/>Promote</li>
          <li><Image src='/admin-icons/icon-6.svg' alt='' width='24' height='24'/>Help</li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;