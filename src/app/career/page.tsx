import AboutUs from "@/components/Modules/AboutUs/About";
import styles from "./global.module.scss";
import Jobs from "@/components/Modules/Jobs/Jobs";
import WhyUs from "@/components/Modules/WhyUs/WhyUs";
import Values from "@/components/Modules/Values/Values";
import Team from "@/components/Modules/Team/Team";
import Faq from "@/components/Modules/Faq/Faq";
import Office from "@/components/Modules/Office/Office";
import Layout from "./layout";

export default function Career() {
    return (
        <>
            <Jobs/>
            <AboutUs/>
            <WhyUs/>
            <Values/>
            <Team/>
            <Faq/>
            <Office/>
        </>
    )
}