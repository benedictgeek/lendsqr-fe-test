import { Logo } from "../../../components/logo";
import siginImage from "../../../assets/images/signin.png";
import styles from "./illustration.module.scss";

const Illustration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.illustrationContainer} data-testid="loginIllustration">
          <img src={siginImage} />
        </div>
      </div>
    </div>
  );
};

export default Illustration;
