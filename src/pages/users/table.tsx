import { DataTable } from "../../components/table/table";
import { FilterIcon } from "../../components/icons";
import styles from "./users.module.scss";

export const UsersTable = () => {
  const headers = [
    <div className={styles.tableHeaderItem}>
      <p>ORGANIZATION</p> <FilterIcon />
    </div>,
    <div className={styles.tableHeaderItem}>
      <p>USERNAME</p> <FilterIcon />
    </div>,
    <div className={styles.tableHeaderItem}>
      <p>EMAIL</p> <FilterIcon />
    </div>,
    <div className={styles.tableHeaderItem}>
      <p>PHONE NUMBER</p> <FilterIcon />
    </div>,
    <div className={styles.tableHeaderItem}>
      <p>DATE JOINED</p> <FilterIcon />
    </div>,
    <div className={styles.tableHeaderItem}>
      <p>STATUS</p> <FilterIcon />
    </div>,
    "",
  ];
  const data = [
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
    [
      "Lendsqr",
      "Adedeji",
      "adedeji@lendsqr.com",
      "08078903721",
      "May 15, 2020 10:00 AM",
      "chip",
      "I",
    ],
  ];
  return (
    <DataTable headers={headers} paginator={false} data={data} pageSize={20} />
  );
};
