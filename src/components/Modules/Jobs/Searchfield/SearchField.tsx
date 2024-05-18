import { UiSearchBar } from "@/components/UI/Searchbar/Searchbar";
import styles from "./searchField.module.scss";
import Image from "next/image";
import { MainTitle } from "@/components/UI/Heading/Heading";

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
          <button className={styles.btn}>Call - center</button>
          <button className={styles.btn}>Стажировка</button>
          <button className={styles.btn}>Промоутеры</button>
        </div>

        <div className={styles.secondBtnsWrap}>
          <button className={styles.btn}>Экспертные вакансии</button>
          <button className={styles.btn}>Офисы продаж и обслуживания</button>
        </div>
      </div>
      </>
  );
}
