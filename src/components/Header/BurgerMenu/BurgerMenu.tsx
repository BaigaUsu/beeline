'use client'
import React from 'react';
import styles from './burgerMenu.module.scss';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu, isMenuOpen }) => {
  const pathname = usePathname();
  return (
    <div className={styles.mobileMenu}>
      <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Image src='/headerIcons/logo.svg' alt="" width={44} height={44} className={styles.logo} />
      <Button className={styles.btn} variant="main">
        Войти
      </Button>
      {isMenuOpen && (
        <nav className={styles.menuList}>
          <div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Карта офисов</li>
            <li className={styles.listItem}>Акции и новости</li>
            <li className={styles.listItem}> Смартфоны</li>
            <li className={styles.listItem}>Перейти в Beeline</li>
            <li className={styles.listItem}>Balance.kg</li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.listItem}>Тарифы</li>
            <li className={styles.listItem}>Услуги</li>
            <li className={styles.listItem}>Пополнение</li>
            <li className={styles.listItem}>Роуминг</li>
            <li><Link
              href='/career'
              className={`${styles.listItem} ${pathname === '/career' ? styles.active : ''}`}
            >
              Карьера в Beeline
            </Link></li>
            <li className={styles.listItem}>Регистрация номера</li>
          </ul>
        </div>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
