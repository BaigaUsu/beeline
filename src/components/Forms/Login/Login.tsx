'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      phone,
      password,
    });

    console.log('Sign-in result:', result);

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2>Введите данные</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#" className={styles.forgotPassword}>
                Забыли пароль?
              </a>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginButton}>
              Войти
            </button>
            <button className={styles.registerButton}>Регистрация</button>
          </form>
        </div>
        <div className={styles.illustration}>
          <Image src="/login/login-icon.svg" alt="Login Illustration" width={410} height={410} />
        </div>
      </div>
    </div>
  );
};

export default Login;