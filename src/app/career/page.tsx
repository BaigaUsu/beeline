import AboutUs from "@/components/Modules/AboutUs/About";
import styles from "./global.module.scss";
import Jobs from "@/components/Modules/Jobs/Jobs";
import WhyUs from "@/components/Modules/WhyUs/WhyUs";
import Values from "@/components/Modules/Values/Values";
import Team from "@/components/Modules/Team/Team";
import Faq from "@/components/Modules/Faq/Faq";
import Office from "@/components/Modules/Office/Office";

export default function Career() {
    return (
        <main className={styles.app}>
            <Jobs/>
            <AboutUs/>
            <WhyUs/>
            <Values/>
            <Team/>
            <Faq/>
            <Office/>
        </main>
    )
}