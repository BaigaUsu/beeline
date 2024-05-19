import { UiSearchBar } from "@/components/UI/Searchbar/Searchbar";
import { MainTitle } from "@/components/UI/Heading/Heading";
import styles from "./searchField.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function SearchField() {
  return (
    <>
      <Image src='/jobsIcons/ellipseFirstIcon.svg' alt="" className={styles.firstEllipse} width="431" height="557"/>
      <div className={styles.titleWrap}>
        <MainTitle>
          Работа с <span className={styles.titleSpan}>Beeline</span>
        </MainTitle>
        <p className={styles.description}>найди работу прямо сейчас!</p>
      </div>
      <div>
        <UiSearchBar />
      </div>
      <div className={styles.btnsWrap}>
        <div className={styles.firstBtnsWrap}>
          <Link href="/career/call-center" className={styles.btn}>Call - center</Link>
          <Link href="/career/call-center" className={styles.btn}>Стажировка</Link>
          <Link href="/career/call-center" className={styles.btn}>Промоутеры</Link>
        </div>

        <div className={styles.secondBtnsWrap}>
          <Link href="/career/call-center" className={styles.btn}>Экспертные вакансии</Link>
          <Link href="/career/call-center" className={styles.btn}>Офисы продаж и обслуживания</Link>
        </div>
      </div>
      </>
  );
}
