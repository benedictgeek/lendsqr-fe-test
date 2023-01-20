import { ArrowDownIcon, BriefcaseIcon } from "../../icons";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.itemContainer} ${styles.switchOrg}`}>
        <BriefcaseIcon /> <p className={styles.itemText}>Switch organization</p>
        <ArrowDownIcon />
      </div>

      <div className={`${styles.itemContainer} ${styles.dashboard}`}>
        <BriefcaseIcon /> <p className={styles.itemText}>Dashboard</p>
      </div>

      <div className={`${styles.itemContainer} ${styles.sectionHeader}`}>CUSTOMERS</div>
    </div>
  );
};
