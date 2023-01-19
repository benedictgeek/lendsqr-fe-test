import { Logo } from "../../../components/logo";
import siginImage from "../../../assets/images/signin.png";
import styles from "./illustration.module.scss";

const Illustration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.illustrationContainer}>
        <img src={siginImage} />
      </div>
    </div>
  );
};

export default Illustration;
