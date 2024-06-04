import Header from "../../AdminUI/Header/Header";
import Sidebar from "../../AdminUI/Sidebar/Sidebar";
import styles from './editVacancy.module.scss';
import ListHead from "../../AdminUI/JobListHead/ListHead";
import EditForm from "@/components/Forms/Vacancy/EdtForm";

export default function CreateVacancy() {
    return (
        <div className={styles.layout2}>
            <Header className={styles.header2} />
            <div className={styles.main2}>
                <Sidebar className={styles.sidebar2} />
                <div className={styles.content2}>
                    <ListHead className={styles["list-head"]} />
                    <EditForm className={styles["job-list"]} />
                </div>
            </div>
        </div>
    );
}