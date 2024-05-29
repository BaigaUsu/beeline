

import Image from "next/image";
import styles from "./footerLogo.module.scss";

export default function FooterLogo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.footerLogoIcon}>
        <Image src='/footer-icons/footer-logo-icon.svg' alt='' width="117" height="36" />
        <span className={styles.text}>© Beeline, 2024</span>
      </div>
      <div className={styles.iconsWrap}>
        <div className={styles.playMarketIcon}>
            <Image src='/footer-icons/playMarket-icon.svg' alt='' width="25" height="25"/>
        </div>
            <Image src='/footer-icons/istore-icon.svg' alt='' width="23" height="25"/>
      </div>
    </div>
  );
}
