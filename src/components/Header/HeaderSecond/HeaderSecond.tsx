"use client";
import Image from "next/image";
import styles from "./headerSecond.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const LOGOUT_API_URL = 'https://ttraining548.pythonanywhere.com/api/v1/auth/logout/';

export default function HeaderSecond() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleSignOut = async () => {
    if (session?.user?.token) {
      console.log('Attempting to log out from Django with token:', session.user.token);

      try {
        const response = await fetch(LOGOUT_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${session.user.token}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to logout from Django:', response.status, response.statusText);
        } else {
          const data = await response.json();
          console.log('Logout successful:', data);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }

    signOut({ callbackUrl: '/' });
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoListWrap}>
          <div>
            <Image src='/headerIcons/logo.svg' alt="" width={44} height={44} />
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Тарифы</li>
            <li className={styles.listItem}>Услуги</li>
            <li className={styles.listItem}>Пополнение</li>
            <Link href='/admin' className={styles.listItem}>Роуминг</Link>
            <Link
              href='/career'
              className={`${styles.listItem} ${pathname === '/career' ? styles.active : ''}`}
            >
              Карьера в Beeline
            </Link>
            <li className={styles.listItem}>Регистрация номера</li>
          </ul>
        </div>

        <div className={styles.logInWrap}>
          <Image src='/headerIcons/searchIcon.svg' alt="" width={24} height={24} />
          {session && (
            <Link href='/admin'>
              <Button className={styles.btn} variant="main">
                Админка
              </Button>
            </Link>
          )}
          {session ? (
            <Link href='#' onClick={handleSignOut}>
              <Button className={styles.btn} variant="main">
                Выйти
              </Button>
            </Link>
          ) : (
            <Link href='/api/auth/signin'>
              <Button className={styles.btn} variant="main">
                Войти
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}