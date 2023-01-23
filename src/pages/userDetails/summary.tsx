import styles from "./userDetails.module.scss";
import { Avartar, StartEmpty, StartFilled } from "../../components/icons";
import { VerticalSpacer } from "../../components/utils";

export const UserSummary = () => {
  return (
    <div className={styles.userHighlights}>
      <div className={styles.details}>
        <div className={styles.profile}>
          <div className={styles.avartar}>
            <Avartar />
          </div>
          <div className={styles.nameAndIDContainer}>
            <div>Name Namme</div>
            <VerticalSpacer size={8} />
            <div>12ER456GJJ</div>
          </div>
        </div>
        <div className={styles.tierContainer}>
          <div className={styles.teirTitle}>User's Tier</div>
          <VerticalSpacer size={10.96} />
          <div className={styles.startRating}>
            <StartFilled /> <StartEmpty /> <StartEmpty />
          </div>
        </div>
        <div className={styles.accountContainer}>
          <div>Name Namme</div>
          <VerticalSpacer size={12} />
          <div>9912345678/Providus Bank</div>
        </div>
      </div>

      <div className={`${styles.tabsContainer}`}>
        <div className={`${styles.tab} ${styles.active}`}>General Details</div>
        <div className={styles.tab}>Documents</div>
        <div className={styles.tab}>Bank Details</div>
        <div className={styles.tab}>Loans</div>
        <div className={styles.tab}>Savings</div>
        <div className={styles.tab}>App and System</div>
      </div>
    </div>
  );
};
