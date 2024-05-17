'use client'

import { ButtonHTMLAttributes, useState } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export type ButtonProps = {
  variant: "main" | "more";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  variant,
  ...props
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1500);
  };
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.main]: variant === "main",
        [styles.more]: variant === "more",
        [styles.active]: variant === "more" && isActive,
      })}
      onClick={handleClick}
    >
      <span
        className={clsx(styles.span, {
          [styles.spanActive]: variant === "more" && isActive,
        })}
      >
        {props.children}
      </span>
    </button>
  );
}
