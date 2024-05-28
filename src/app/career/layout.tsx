import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from './global.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.app}>
      <Header />

      <div className={`${styles.background} ${styles.left1}`}></div>
      <div className={`${styles.background} ${styles.left2}`}></div>
      <div className={`${styles.background} ${styles.left3}`}></div>
      <div className={`${styles.background} ${styles.right1}`}></div>
      <div className={`${styles.background} ${styles.right2}`}></div>
      <div className={`${styles.background} ${styles.right3}`}></div>

      {children}

      <Footer />
    </div>
  );
}
