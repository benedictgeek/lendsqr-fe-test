import LoginForm from "./form/form";
import Illustration from "./illustration/illustration";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
