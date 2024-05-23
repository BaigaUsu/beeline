import Header from "./AdminUI/Header/Header";
import JobList from "./AdminUI/JobList/JobList";
import ListHead from "./AdminUI/JobListHead/ListHead";
import Sidebar from "./AdminUI/Sidebar/Sidebar";
// import Layout from "./layout";
import styles from './global.module.scss';



export default async function Admin() {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <div className={styles.main}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.content}>
                    <ListHead className={styles["list-head"]} />
                    <JobList className={styles["job-list"]} />
                </div>
            </div>
        </div>
    );
}
