import { BellIcon, DropDownIcon, SearchIcon } from "../../icons";
import { Input } from "../../input/input";
import { Logo } from "../../logo";
import styles from "./navbar.module.scss";
import userImg from "../../../assets/images/userImage.png";
import Dropdown from "../../dropdown/dropdown";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <Logo height={30} width={150} viewboxHeightOffset={8} viewboxX={20} />
      </div>
      <div className={styles.navSection}>
        <div className={styles.defaultSearchContainer}>
          <SearchInput />
        </div>

        <div className={styles.iconSearchContainer}>
          <Dropdown content={<SearchInput />}>
            <SearchIcon size={16} className={styles.searchSvg} />
          </Dropdown>
        </div>

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

          <Dropdown content={<MobileDropDownContent />}>
            <div className={styles.userProfileMenu}>
              <div
                className={styles.avartar}
                style={{ backgroundImage: `url(${userImg})` }}
              ></div>
              <DropDownIcon />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

const MobileDropDownContent = () => {
  return (
    <div className={styles.mobileDropdownContainer}>
      <div className={styles.name}>Adedeji</div>
      <a className={styles.docsLink}>Docs</a>
      <div className={styles.bell}>
        <BellIcon className={styles.bellSvg} />
      </div>
      <SearchInput />
    </div>
  );
};

const SearchInput = () => {
  return (
    <Input
      placeholder="Search for anything"
      className={styles.searchInput}
      iconRight={
        <div className={styles.searchIconContainer}>
          <SearchIcon />
        </div>
      }
    />
  );
};
