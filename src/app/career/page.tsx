import AboutUs from "@/components/Modules/AboutUs/About";
import styles from "./global.module.scss";
import Jobs from "@/components/Modules/Jobs/Jobs";

export default function Career() {
    return (
        <main className={styles.app}>
            <Jobs/>
            <AboutUs/>
        </main>
    )
}