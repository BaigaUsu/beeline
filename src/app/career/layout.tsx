import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from './global.module.scss'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.app}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}