import styles from './global.module.scss'

interface LayoutProps {
  children: React.ReactNode;
  className: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}