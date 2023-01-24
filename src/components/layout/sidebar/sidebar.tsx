import { useEffect, useMemo, useState } from "react";
import { ArrowDownIcon, BriefcaseIcon } from "../../icons";
import { VerticalSpacer } from "../../utils";
import {
  AuditLogsIcon,
  DashboardIcon,
  DecisionModelsIcon,
  FeesAndChargesIcon,
  FeesAndPricingIcon,
  GuarantorsIcon,
  KarmaIcon,
  LoanRequestsIcon,
  LoansIcon,
  Menu,
  MenuClose,
  PrefrencesIcon,
  ReportsIcon,
  SavingsIcon,
  SavingsProductIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementsIcon,
  SignOutIcon,
  SystemMessagesIcon,
  TransactionsIcon,
  Users,
  WhitelistIcon,
} from "./icons";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [toggleClass, setToggleClass] = useState(styles.open);
  const currentDashboardPath = useMemo(
    () => window.location.pathname.split("/")[2],
    []
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    mq.addEventListener("change", checkWidth);
    checkWidth(mq);
    return () => mq.removeEventListener("change", checkWidth);
  }, []);
  const checkWidth = (mq: any) => {
    if (mq.matches) {
      setShowDrawer(true);
      setToggleClass(styles.close);
    } else {
      setShowDrawer(false);
      setToggleClass(styles.open);
    }
  };

  const handleDrawerCLick = () => {
    if (toggleClass == styles.open) {
      setToggleClass(styles.close);
    } else {
      setToggleClass(styles.open);
    }
  };

  return (
    <div className={styles.sidebarAndDrawerContainer}>
      <div className={`${styles.container} ${toggleClass} `}>
        <div className={`${styles.itemContainer} ${styles.switchOrg}`}>
          <BriefcaseIcon />{" "}
          <p className={styles.itemText}>Switch organization</p>
          <ArrowDownIcon />
        </div>

        <div className={`${styles.itemContainer} ${styles.dashboard}`}>
          <DashboardIcon /> <p className={styles.itemText}>Dashboard</p>
        </div>

        {menuItems.map((section, index) => {
          return (
            <div key={`section_${index}`}>
              <div
                className={`${styles.itemContainer} ${styles.sectionHeader}`}
              >
                {section.section}
              </div>
              {section.items.map((item, index) => {
                const isLastItem = index == section.items.length - 1;
                let isActive = false;
                if (item.route) {
                  isActive = currentDashboardPath?.includes(
                    item.route.substring(1) || ""
                  );
                }
                return (
                  <div
                    key={`${section.section}_menu_${index}`}
                    className={`${styles.itemContainer} ${
                      isLastItem ? styles.sectionItemsLast : styles.sectionItems
                    } ${isActive ? styles.isActive : ""}`}
                  >
                    {item.icon} <p className={styles.itemText}>{item.title}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
        <VerticalSpacer size={9.5} />
        <div className={styles.divider}></div>
        <VerticalSpacer size={9.5} />
        <div className={`${styles.itemContainer} ${styles.logout}`}>
          <SignOutIcon /> <p className={styles.itemText}>Logout</p>
        </div>
        <VerticalSpacer size={19} />
        <div className={`${styles.itemContainer} ${styles.version}`}>
          <p className={styles.itemText}>v1.2.0</p>
        </div>
      </div>
      {showDrawer && (
        <span className={styles.drawer} onClick={handleDrawerCLick}>
          {toggleClass == styles.open ? <MenuClose /> : <Menu />}
        </span>
      )}
    </div>
  );
};

const menuItems = [
  {
    section: "CUSTOMERS",
    items: [
      {
        title: "Users",
        icon: <Users />,
        route: "/users",
      },
      {
        title: "Gurantors",
        icon: <GuarantorsIcon />,
      },
      {
        title: "Loans",
        icon: <LoansIcon />,
      },
      {
        title: "Decision Models",
        icon: <DecisionModelsIcon />,
      },
      {
        title: "Savings",
        icon: <SavingsIcon />,
      },
      {
        title: "Loan Requests",
        icon: <LoanRequestsIcon />,
      },
      {
        title: "Whitelist",
        icon: <WhitelistIcon />,
      },
      {
        title: "Karma",
        icon: <KarmaIcon />,
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
        icon: <LoanRequestsIcon />,
      },
      {
        title: "Savings Products",
        icon: <SavingsProductIcon />,
      },
      {
        title: "Fees and Charges",
        icon: <FeesAndChargesIcon />,
      },
      {
        title: "Transactions",
        icon: <TransactionsIcon />,
      },
      {
        title: "Services",
        icon: <ServicesIcon />,
      },
      {
        title: "Service Account",
        icon: <ServiceAccountIcon />,
      },
      {
        title: "Settlements",
        icon: <SettlementsIcon />,
      },
      {
        title: "Reports",
        icon: <ReportsIcon />,
      },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      {
        title: "Preferences",
        icon: <PrefrencesIcon />,
      },
      {
        title: "Fees and Pricing",
        icon: <FeesAndPricingIcon />,
      },
      {
        title: "Audit Logs",
        icon: <AuditLogsIcon />,
      },
      {
        title: "System Messages",
        icon: <SystemMessagesIcon />,
      },
    ],
  },
];
