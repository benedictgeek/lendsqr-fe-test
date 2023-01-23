import { ReactNode } from "react";
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
        <VerticalSpacer size={30} />
        <div className={styles.additionalInformation}>
          <AdditionalInformationSection
            headerText={"Personal Information"}
            values={[
              { title: "Full Name", value: "Grame me" },
              { title: "Full Name", value: "Grame me" },
            ]}
          />
          <AdditionalInformationSection
            headerText={"Personal Information"}
            values={[{ title: "Full Name", value: "Grame me" }]}
          />
          <AdditionalInformationSection
            headerText={"Personal Information"}
            values={[{ title: "Full Name", value: "Grame me" }]}
          />
          <AdditionalInformationSection
            headerText={"Personal Information"}
            values={[{ title: "Full Name", value: "Grame me" }]}
          />
        </div>
      </ContentBody>
    </Layout>
  );
};

type InfoItemType = {
  title: ReactNode;
  value: ReactNode;
};

interface AdditionalInformationSectionProps {
  headerText?: ReactNode;
  values: InfoItemType[];
}

const AdditionalInformationSection = ({
  headerText,
  values,
}: AdditionalInformationSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>{headerText}</div>
      <div className={styles.itemsContainer}>
        {values.map((item, index) => {
          return (
            <div key={`${headerText}_item_${index}`} className={styles.item}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.value}>{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
