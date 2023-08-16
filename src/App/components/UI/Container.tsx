import React, { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

const Container: FC<{ children: ReactNode; style?: string }> = ({
  children,
  style = "",
}) => {
  return <div className={styles.container + " " + style}>{children}</div>;
};

export default Container;
