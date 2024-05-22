'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';
import { encrypt, decrypt, logout } from "@/app/lib/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Остановка отправки формы по умолчанию

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);

    try {
      // Проверка введенных данных и вход пользователя
      const session = await decrypt(localStorage.getItem("session") || "");
      const validUser = session.userInfoList.some((userInfo) => 
        userInfo.email === email && userInfo.name === name
      );

      if (validUser) {
        console.log("User entered correct credentials. Logging in...");
        const expires = new Date(Date.now() + 100 * 1000); // 100 seconds from now
        const newSession = await encrypt(session); // Сохраняем весь объект сессии
        localStorage.setItem("session", newSession);
        console.log("Session stored in localStorage:", newSession);
        router.push("/");
      } else {
        console.log("User entered incorrect credentials. Not logging in.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Обработка ошибки входа, например, отображение сообщения об ошибке
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/"); // Перенаправляем пользователя на главную страницу после выхода
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2>Введите данные</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Имя пользователя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Пароль"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <a href="#" className={styles.forgotPassword}>
                Забыли пароль?
              </a>
            </div>
            <button type="submit" className={styles.loginButton}>
              Войти
            </button>
            <button className={styles.registerButton}>Регистрация</button>
          </form>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Выйти
          </button>
        </div>
        <div className={styles.illustration}>
          <Image src="/login/login-icon.svg" alt="Login Illustration" width={410} height={410} />
        </div>
      </div>
    </div>
  );
}
