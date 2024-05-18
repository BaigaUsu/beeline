import IconsBar from "./IconsBar/IconsBar";
import FooterLogo from "./Logo/FooterLogo";
import FooterNavMenu from "./NavMenu/FooterNavMenu";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterNavMenu />
        <IconsBar />
        <FooterLogo /> 
      </div>
    </footer>
  );
}
