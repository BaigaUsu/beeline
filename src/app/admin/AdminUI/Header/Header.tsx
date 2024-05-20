import Image from 'next/image'
import styles from './header.module.scss'
import Link from 'next/link'

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src='/headerIcons/logo.svg' alt='' width='44' height='44'/>
                <Link href='/' className={styles.link}>Beeline</Link>
            </div>
            <div className={styles.user}>
                <div className={styles.description}>
                    <p className={styles.name}>Асанбеков Асан Асанович</p>
                    <p className={styles.position}>Менеджер</p>
                </div>
                <Image src='/headerIcons/logo.svg' alt='' width='44' height='44'/>
            </div>
        </div>
    )
}

export default Header;