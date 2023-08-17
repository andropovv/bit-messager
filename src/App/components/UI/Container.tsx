import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface IContainer {
	children: ReactNode;
	style?: string;
}

const Container: FC<IContainer> = ({ children, style = "" }) => {
	return <div className={styles.container + " " + style}>{children}</div>;
};

export default Container;
