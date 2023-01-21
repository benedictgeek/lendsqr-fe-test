import { useMemo } from "react";
import { ArrowDownIcon, BriefcaseIcon } from "../../icons";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  const currentDashboardPath = useMemo(
    () => window.location.pathname.split("/")[2],
    []
  );
  return (
    <div className={styles.container}>
      <div className={`${styles.itemContainer} ${styles.switchOrg}`}>
        <BriefcaseIcon /> <p className={styles.itemText}>Switch organization</p>
        <ArrowDownIcon />
      </div>

      <div className={`${styles.itemContainer} ${styles.dashboard}`}>
        <BriefcaseIcon /> <p className={styles.itemText}>Dashboard</p>
      </div>

      {menuItems.map((section) => {
        return (
          <>
            <div className={`${styles.itemContainer} ${styles.sectionHeader}`}>
              {section.section}
            </div>
            {section.items.map((item, index) => {
              const isLastItem = index == section.items.length - 1;
              let isActive = false;
              if (item.route) {
                isActive = currentDashboardPath.includes(
                  item.route.substring(1) || ""
                );
              }
              return (
                <div
                  className={`${styles.itemContainer} ${
                    isLastItem ? styles.sectionItemsLast : styles.sectionItems
                  } ${isActive ? styles.isActive : ""}`}
                >
                  <BriefcaseIcon />{" "}
                  <p className={styles.itemText}>{item.title}</p>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

const menuItems = [
  {
    section: "CUSTOMERS",
    items: [
      {
        title: "Users",
        icon: <BriefcaseIcon />,
        route: "/users",
      },
      {
        title: "Gurantors",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Loans",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Decision Models",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Savings",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Loan Requests",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Whitelist",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Karma",
        icon: <BriefcaseIcon />,
      },
    ],
  },
  {
    section: "BUSINESSES",
    items: [
      {
        title: "Organization",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Loan Products",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Savings Products",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Fees and Charges",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Transactions",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Services",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Service Account",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Settlements",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Reports",
        icon: <BriefcaseIcon />,
      },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      {
        title: "Preferences",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Fees and Pricing",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Audit Logs",
        icon: <BriefcaseIcon />,
      },
    ],
  },
];
