import { FC, PropsWithChildren } from "react";
import { NavBar } from "./navbar/navbar";
import { SideBar } from "./sidebar/sidebar";
import styles from "./layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.sidebarAndContentcontainer}>
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
