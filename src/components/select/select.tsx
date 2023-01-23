import { HTMLProps, ReactNode, useState } from "react";
import styles from "./select.module.scss";

type ValueItem = {
  title: ReactNode;
  value: string | number;
};

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  values: ValueItem[];
}

export const Select = (props: SelectProps) => {
  const [selected, setSelected] = useState("");
  return (
    <select
      className={`${styles.selectContainer} ${
        selected == "" ? styles.placeholder : ""
      }`}
      {...props}
    >
      <option value="" selected disabled>
        {props.placeholder}
      </option>
      {props.values.map((item) => {
        return <option value={item.value}>{item.title}</option>;
      })}
    </select>
  );
};
