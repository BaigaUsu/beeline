import { ReactNode } from "react";
import styles from "./heading.module.scss";
import clsx from "clsx";

export type UiMainTitleProps = {
  className?: string;
  children: ReactNode;
};

export const MainTitle = ({ className, children }: UiMainTitleProps) => {
  return <h1 className={styles.mainTitle}>{children}</h1>;
};


export const Title = ({ className, children }: UiMainTitleProps) => {
  return <h2 className={clsx(className, styles.title)}>{children}</h2>;
};
