import Image from "next/image";
import styles from "./iconsBar.module.scss";

export default function IconsBar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.iconsWrap}>
        <Image src='/footer-icons/insta-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/tiktok-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/youtube-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/vk-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/twitter-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/whatsapp-icon.svg' alt='' width='32' height='32' className={styles.icon} />
        <Image src='/footer-icons/facebook-icon.svg' alt='' width='32' height='32' className={styles.icon} />

      </div>
      <div className={styles.contactsWrap}>
        <div className={styles.contact}>
          <Image src='/footer-icons/email-icon.svg' alt='' width='25' height='19' className={styles.linkIcon} />
          <span>answer@beeline.kg</span>
        </div>
        <div className={styles.contact}>
          <Image src='/footer-icons/phone-icon.svg' alt='' width='16' height='25' className={styles.linkIcon} />
          <span>*611 справочная</span>
        </div>
      </div>
      <div className={styles.forOtherCompanies}>
        <p>Для операторов других сетей</p>
        <p>+996 (775) 58 0611</p>
      </div>
    </div>
  );
}
