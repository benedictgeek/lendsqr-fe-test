import {
  HTMLProps,
  ReactNode,
  useState,
  forwardRef,
  useRef,
  useEffect,
} from "react";
import { CalendarIcon } from "../icons";
import "./input.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, className, iconLeft, iconRight, style, ...props }, ref) => {
    return (
      <div
        className={`input ${className} ${props.disabled ? "disabled" : ""} ${
          iconLeft ? "hasLeft" : ""
        } ${iconRight ? "hasRight" : ""}`}
        style={style}
      >
        {iconLeft && <div className="icon left">{iconLeft}</div>}
        <input value={props.value} onChange={onChange} {...props} ref={ref} />
        {iconRight && <div className="icon right">{iconRight}</div>}
      </div>
    );
  }
);

export const DatePicker = (props: Omit<InputProps, "type">) => {
  const [type, setType] = useState("text");
  const ref = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setType("date");
  };

  const onBlur = () => {
    setType("text");
  };

  if (ref == null) return <></>;
  return (
    <Input
      {...props}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      iconRight={
        <div
          style={{ padding: "0 7px" }}
          onClick={() => {
            ref.current!.type = "date";
            ref.current?.focus();
            ref.current?.showPicker();
          }}
        >
          <CalendarIcon />
        </div>
      }
    />
  );
};
