import VacancyForm from "@/components/Forms/Vacancy/VacancyForm";
import Header from "../../AdminUI/Header/Header";
import Sidebar from "../../AdminUI/Sidebar/Sidebar";
import Layout from "../../layout";
import styles from '../../global.module.scss';
import ListHead from "../../AdminUI/JobListHead/ListHead";

export default function CreateVacancy() {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header} />
            <div className={styles.main}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.content}>
                    <ListHead className={styles["list-head"]} />
                    <VacancyForm className={styles["job-list"]} />
                </div>
            </div>
        </Layout>
        
    )
}