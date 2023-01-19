import { HTMLProps, ReactNode } from "react";
import "./input.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Input = ({
  onChange,
  className,
  iconLeft,
  iconRight,
  style,
  ...props
}: InputProps) => {
  return (
    <div
      className={`input ${className} ${props.disabled ? "disabled" : ""} ${
        iconLeft ? "hasLeft" : ""
      } ${iconRight ? "hasRight" : ""}`}
      style={style}
    >
      {iconLeft && <div className="icon left">{iconLeft}</div>}
      <input value={props.value} onChange={onChange} {...props} />
      {iconRight && <div className="icon right">{iconRight}</div>}
    </div>
  );
};
