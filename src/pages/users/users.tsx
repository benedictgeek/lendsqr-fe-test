import {
  ActiveUsersSummaryIcon,
  UsersSummaryIcon,
  UsersWithLoansSummaryIcon,
  UsersWithSavingsSummaryIcon,
} from "./icons";
import { ContentBody, PageTitle } from "../../components/layout/helpers";
import Layout from "../../components/layout/layout";
import { VerticalSpacer } from "../../components/utils";
import styles from "./users.module.scss";
import { UsersTable } from "./table";

const Users = () => {
  return (
    <Layout>
      <ContentBody>
        <PageTitle>Users</PageTitle>
        <VerticalSpacer size={40} />
        <div className={styles.summaryCardsContainer}>
          <SummaryCard type="users" value={2453} icon={<UsersSummaryIcon />} />
          <SummaryCard
            type="activeUsers"
            value={2453}
            icon={<ActiveUsersSummaryIcon />}
          />
          <SummaryCard
            type="usersWithLoans"
            value={12453}
            icon={<UsersWithLoansSummaryIcon />}
          />
          <SummaryCard
            type="usersWithSavings"
            value={102453}
            icon={<UsersWithSavingsSummaryIcon />}
          />
        </div>
        <VerticalSpacer size={20} />
        <UsersTable />
      </ContentBody>
    </Layout>
  );
};

interface SummaryCardProps {
  type: "users" | "activeUsers" | "usersWithLoans" | "usersWithSavings";
  value: number;
  icon: JSX.Element;
}

const SummaryCard = ({ type, value, icon }: SummaryCardProps) => {
  let title = "";
  switch (type) {
    case "users":
      title = "USERS";
      break;
    case "activeUsers":
      title = "ACTIVE USERS";
      break;
    case "usersWithLoans":
      title = "ACTIVE WITH LOANS";
      break;
    case "usersWithSavings":
      title = "ACTIVE WITH SAVINGS";
      break;
    default:
      break;
  }
  return (
    <div className={styles.summaryCard}>
      <div className={`${styles.icon} ${styles[type]}`}>{icon}</div>
      <VerticalSpacer size={14} />
      <div className={styles.title}>{title}</div>
      <VerticalSpacer size={12} />
      <div className={styles.value}>{value.toLocaleString()}</div>
    </div>
  );
};

export default Users;
