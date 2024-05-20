import Image from 'next/image';
import styles from './login.module.scss';

export default function Login () {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <h2>Введите данные</h2>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder="Имя пользователя" />
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" placeholder="Пароль" />
                    <a href="#" className={styles.forgotPassword}>
                        Забыли пароль?
                    </a>
                </div>
                <button className={styles.loginButton}>Войти</button>
                <button className={styles.registerButton}>Регистрация</button>
            </div>
            <div className={styles.illustration}>
                <Image src="/login/login-icon.svg" alt="Login Illustration" width='410' height='410'/>
            </div>
        </div>
    </div>
  );
};
