import { ReactNode } from "react";
import { formatAmount } from "../../utils";
import { ObjectLiteral } from "./userDetails";
import styles from "./userDetails.module.scss";

export const AdditionalInformation = ({
  userData,
}: {
  userData: ObjectLiteral;
}) => {
  return (
    <div className={styles.additionalInformation} data-testid="additionalInfo">
      <AdditionalInformationSection
        headerText={"Personal Information"}
        values={[
          {
            title: "Full Name",
            value:
              userData.profile?.firstName + " " + userData.profile?.lastName,
          },
          {
            title: "Phone Number",
            value: userData.profile?.phoneNumber,
          },
          { title: "Email Address", value: userData.email },
          { title: "BVN", value: userData.profile?.bvn },
          { title: "GENDER", value: userData.profile?.gender },
          { title: "Marital Status", value: "Single" },
          { title: "Children", value: "None" },
          { title: "Type of Residence", value: "Parent's Apartment" },
        ]}
      />
      <AdditionalInformationSection
        headerText={"Education and Employment"}
        values={[
          {
            title: "level of education",
            value: userData.education?.level,
          },
          {
            title: "employment status",
            value: userData.education?.employmentStatus,
          },
          {
            title: "sector of employment",
            value: userData.education?.sector,
          },
          {
            title: "office email",
            value: userData.education?.officeEmail,
          },
          {
            title: "Monthly income",
            value: `${formatAmount(
              userData.education?.monthlyIncome[0]
            )} - ${formatAmount(userData.education?.monthlyIncome[1])}`,
          },
          {
            title: "Loan repayment",
            value: formatAmount(userData.education?.loanRepayment),
          },
        ]}
      />
      <AdditionalInformationSection
        headerText={"Socials"}
        values={[
          { title: "Twitter", value: userData.socials?.twitter },
          { title: "Facebook", value: userData.socials?.facebook },
          { title: "Instagram", value: userData.socials?.instagram },
        ]}
      />
      <AdditionalInformationSection
        headerText={"Guarantor"}
        values={[
          {
            title: "Full Name",
            value:
              userData.guarantor?.firstName +
              " " +
              userData.guarantor?.lastName,
          },
          {
            title: "Phone Number",
            value: userData.guarantor?.phoneNumber,
          },
          {
            title: "Relationship",
            value: "Sister",
          },
        ]}
      />
    </div>
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
