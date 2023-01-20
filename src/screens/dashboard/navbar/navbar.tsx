import { BellIcon, DropDownIcon, SearchIcon } from "../../../components/icons";
import { Input } from "../../../components/input/input";
import { Logo } from "../../../components/logo";
import styles from "./navbar.module.scss";
import userImg from "../../../assets/images/userImage.png";
export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <Logo height={30} width={150} viewboxHeightOffset={8} viewboxX={20} />
      </div>
      <div className={styles.navSection}>
        <Input
          placeholder="Search for anything"
          className={styles.searchInput}
          iconRight={
            <div className={styles.searchIconContainer}>
              <SearchIcon />
            </div>
          }
        />
        <div className={styles.navItemsContainer}>
          <div className={styles.nav}>
            <a className={styles.docsLink}>Docs</a>
            <div className={styles.bell}>
              <BellIcon className={styles.bellSvg} />
            </div>
          </div>

          <div className={styles.userProfile}>
            <div
              className={styles.avartar}
              style={{ backgroundImage: `url(${userImg})` }}
            ></div>
            <div className={styles.name}>Adedeji</div>
            <DropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
