import { useEffect, useMemo, useState } from "react";
import { ArrowDownIcon, BriefcaseIcon } from "../../icons";
import { Menu, MenuClose } from "./icons";
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
          <BriefcaseIcon /> <p className={styles.itemText}>Dashboard</p>
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
                    <BriefcaseIcon />{" "}
                    <p className={styles.itemText}>{item.title}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
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
