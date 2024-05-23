import Image from 'next/image'
import styles from './header.module.scss'
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import { authConfig } from '../../../../../configs/auth';

interface HeaderProps {
  className?: string;
}

const  Header: React.FC<HeaderProps> = async({ className }) => {
    const session = await getServerSession(authConfig);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src='/headerIcons/logo.svg' alt='' width='44' height='44'/>
                <Link href='/' className={styles.link}>Beeline</Link>
            </div>
            <div className={styles.user}>
                <div className={styles.description}>
                    <div >{session?.user?.name}</div> 
                    <div className={styles.position}>{session?.user?.role}</div>
                </div>
                <Image src='/headerIcons/logo.svg' alt='' width='44' height='44'/>
            </div>
        </div>
    )
}

export default Header;