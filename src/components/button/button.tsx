import { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "contained" | "outlined";
}

export const Button = ({
  loading,
  variant = "contained",
  className,
  ...props
}: InputProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${loading ? "Bloading" : ""} ${
        props.disabled ? "disabled" : ""
      } ${variant} ${className}`}
      {...props}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
