import { ReactNode } from "react";
import styles from "./formGroup.module.scss";

interface FormGroupProps {
  children: ReactNode;
  htmlFor?: string;
  label?: ReactNode;
}

const FormGroup = ({ children, htmlFor, label }: FormGroupProps) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default FormGroup;
