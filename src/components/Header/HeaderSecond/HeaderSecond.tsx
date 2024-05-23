"use client";
import Image from "next/image";
import styles from "./headerSecond.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import { signOut, useSession } from "next-auth/react";

export default function HeaderSecond() {
  const { data: session } = useSession();

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
            <li className={styles.listItem}>Роуминг</li>
            <Link href='/career' className={styles.listItem}>Карьера в Beeline</Link>
            <li className={styles.listItem}>Регистрация номера</li>
          </ul>
        </div>

        <div className={styles.logInWrap}>
          <Image src='/headerIcons/searchIcon.svg' alt="" width={24} height={24} />
          {session?.user?.role === 'admin' && (
            <Link href='/admin'>
              <Button className={styles.btn} variant="main">
                Админка
              </Button>
            </Link>
          )}
          {session ? (
            <Link href='#' onClick={() => signOut({ callbackUrl: "/" })}>
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
