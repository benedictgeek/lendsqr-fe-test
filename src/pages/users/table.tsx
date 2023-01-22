import { ReactNode, useEffect, useState } from "react";
import { DataTable } from "../../components/table/table";
import { FilterIcon, MoreIcon } from "../../components/icons";
import styles from "./users.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import axios from "axios";
import dayjs from "dayjs";
import { ActivateUserIcon, BlackListUserIcon, ViewUserIcon } from "./icons";
import { VerticalSpacer } from "../../components/utils";
import { Link } from "react-router-dom";

export const UsersTable = () => {
  const [data, setData] = useState<ReactNode[][]>([]);
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      let formatedData = [];

      let status = ["inactive", "blacklisted", "active", "pending"];

      for (let index = 0; index < res.data.length; index++) {
        const item = res.data[index];
        let itemArray = [];
        itemArray.push(item.orgName);
        itemArray.push(item.userName);
        itemArray.push(item.email);
        itemArray.push(item.phoneNumber);
        itemArray.push(dayjs(item.createdAt).format("MMM D, YYYY h:mm A"));
        itemArray.push(<Chip type={status[index % 4] as StatuType} />);
        itemArray.push(<MoreActions userId={item.id} />);
        formatedData.push(itemArray);
      }
      setData(formatedData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const headers = [
    <Dropdown content={"SOME STUFF"}>
      <div className={styles.tableHeaderItem}>
        <p>ORGANIZATION</p> <FilterIcon />
      </div>
    </Dropdown>,
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

  return <DataTable headers={headers} paginator={true} data={data} />;
};

type StatuType = "inactive" | "blacklisted" | "active" | "pending";

interface ChipProps {
  type: StatuType;
}

export const Chip = ({ type }: ChipProps) => {
  let text = "";
  switch (type) {
    case "active":
      text = "Active";
      break;
    case "blacklisted":
      text = "Blacklisted";
      break;
    case "inactive":
      text = "Inactive";
      break;
    case "pending":
      text = "Pending";
      break;
    default:
      break;
  }
  return <div className={`${styles.chip} ${styles[type]}`}>{text}</div>;
};

const MoreActions = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  const MoreActionsContent = () => {
    return (
      <div className={styles.actionContentContainer}>
        <Link to={`/dashboard/users/${userId}`}>
          <div className={styles.item}>
            <ViewUserIcon />
            <p>View Details</p>
          </div>
        </Link>
        <VerticalSpacer size={20} />
        <div className={styles.item}>
          <BlackListUserIcon />
          <p>Blacklist User</p>
        </div>
        <VerticalSpacer size={20} />
        <div className={styles.item}>
          <ActivateUserIcon />
          <p>Activate User</p>
        </div>
      </div>
    );
  };
  return (
    <Dropdown
      open={open}
      externalToggle={true}
      content={<MoreActionsContent />}
      onClick={() => setOpen(!open)}
      handleClose={() => setOpen(false)}
      contentClassName={styles.actionsDropdown}
    >
      <MoreIcon />
    </Dropdown>
  );
};
