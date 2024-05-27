import { UiSearchBar } from "@/components/UI/Searchbar/Searchbar";
import { MainTitle } from "@/components/UI/Heading/Heading";
import styles from "./searchField.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function SearchField() {
  return (
    <>
      <Image src='/jobsIcons/ellipseFirstIcon.svg' alt="" className={styles.firstEllipse} width="431" height="557"/>
      <Image src='/jobsIcons/ellipseSecondIcon.svg' alt="" className={styles.secondEllipse} width="317" height="809"/>
      <div className={styles.titleWrap}>
        <MainTitle>
          Работа с <span className={styles.titleSpan}>Beeline</span>
        </MainTitle>
        <p className={styles.description}>найди работу прямо сейчас!</p>
      </div>
      <div>
        <UiSearchBar />
      </div>
      <div className={styles.btnsWrapper}>
        <div className={styles.btnGrid}>
          <Link href="/career/call-center" className={`${styles.btn} ${styles.btn1}`}>Call - center</Link>
          <Link href="/career/call-center" className={styles.btn}>Стажировка</Link>
          <Link href="/career/call-center" className={styles.btn}>Промоутеры</Link>
          <Link href="/career/vacancies/list" className={`${styles.btn} ${styles.widerBtn}`}>Экспертные вакансии</Link>
          <Link href="/career/call-center" className={`${styles.btn} ${styles.widerBtn}`}>Офисы продаж и обслуживания</Link>
        </div>
      </div>
    </>
  );
}
