import { Button } from "../../components/button/button";
import { LongArrowLeft } from "../../components/icons";
import { ContentBody, PageTitle } from "../../components/layout/helpers";
import Layout from "../../components/layout/layout";
import { HorizontalSpacer, VerticalSpacer } from "../../components/utils";
import { UserSummary } from "./summary";
import styles from "./userDetails.module.scss";

const UserDetails = () => {
  return (
    <Layout>
      <ContentBody>
        <div className={styles.backButton}>
          <LongArrowLeft /> <HorizontalSpacer size={14.41} />
          <span>Back to Users</span>
        </div>
        <VerticalSpacer size={13} />
        <div className={styles.pageHeader}>
          <PageTitle>User Details</PageTitle>
          <div className={styles.actions}>
            <Button variant="outlined" className={styles.blackListUser}>
              BLACKLIST USER
            </Button>
            <Button variant="outlined">ACTIVATE USER</Button>
          </div>
        </div>
        <VerticalSpacer size={40} />
        <UserSummary />
      </ContentBody>
    </Layout>
  );
};

export default UserDetails;
