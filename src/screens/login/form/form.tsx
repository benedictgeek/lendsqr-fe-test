import styles from "./form.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.welcome}>Welcome!</h2>
        <p className={styles.welcomeInfo}>Enter details to login</p>
      </div>
    </div>
  );
};

export default LoginForm;
