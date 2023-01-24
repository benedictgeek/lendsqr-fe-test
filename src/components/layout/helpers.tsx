import { FC, PropsWithChildren } from "react";
import styles from "./helpers.module.scss";
export const PageTitle: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <h1 className={styles.pageTitle} {...props}>
      {children}
    </h1>
  );
};

export const ContentBody: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
