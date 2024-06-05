import Image from 'next/image'
import styles from './header.module.scss'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next';
import { authConfig } from '../../../../../configs/auth';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = async ({ className }) => {
  const session = await getServerSession(authConfig);
  console.log('Session:', session);
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.logo}>
        <Image src='/headerIcons/logo.svg' alt='Logo' width={44} height={44} />
        <Link href='/' className={styles.link}>Beeline</Link>
      </div>
      <div className={styles.user}>
        <div className={styles.description}>
          <div>+996777000111</div> 
        </div>
        <Image src='/user/user-1.png' alt='User Image' width={44} height={44} />
      </div>
    </div>
  );
}

export default Header;