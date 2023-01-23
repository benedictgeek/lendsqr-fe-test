import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Logo } from "../../../components/logo";
import { VerticalSpacer } from "../../../components/utils";
import styles from "./form.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo logoId="formLogo" />
        </div>
        <h2 className={styles.welcome}>Welcome!</h2>
        <p className={styles.welcomeInfo}>Enter details to login</p>
        <Input placeholder="Email" className={styles.authInput} />
        <VerticalSpacer size={24} />
        <Input
          placeholder="Password"
          iconRight={<p className={styles.showPassword}>SHOW</p>}
          className={styles.authInput}
        />
        <VerticalSpacer size={24} />
        <a className={styles.forgotPassword}>FORGOT PASSWORD?</a>
        <VerticalSpacer size={30} />
        <Button>LOG IN</Button>
      </div>
    </div>
  );
};

export default LoginForm;
