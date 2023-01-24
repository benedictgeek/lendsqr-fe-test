import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Logo } from "../../../components/logo";
import { VerticalSpacer } from "../../../components/utils";
import styles from "./form.module.scss";
import { useNavigate, useParams } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      let name = e.target.name;
      let value = e.target.value;
      setInputData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } catch (error) {}
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!inputData.email || !inputData.password) {
        return;
      }
      navigate("/dashboard/users");
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo logoId="formLogo" />
        </div>
        <h2 className={styles.welcome}>Welcome!</h2>
        <p className={styles.welcomeInfo}>Enter details to login</p>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Email"
            value={inputData.email}
            name="email"
            onChange={handleChange}
            className={styles.authInput}
            required
          />
          <VerticalSpacer size={24} />
          <Input
            placeholder="Password"
            value={inputData.password}
            name="password"
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            iconRight={
              <p
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </p>
            }
            className={styles.authInput}
            required
          />
          <VerticalSpacer size={24} />
          <a className={styles.forgotPassword}>FORGOT PASSWORD?</a>
          <VerticalSpacer size={30} />
          <Button type="submit">LOG IN</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
