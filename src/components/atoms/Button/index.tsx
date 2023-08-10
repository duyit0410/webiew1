import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  className?: string;
  ctBgColor?: boolean;
  ctSize?: boolean;
  ctRadius?: boolean;
  ctText?: boolean
}
const Button = ({
  children,
  className,
  ctBgColor,
  ctSize,
  ctRadius,
  ctText,
  ...rest
}: IButton) => {
  return (
    <button
      {...rest}
      className={classNames(
        "",
        ctBgColor ?? "bg-app",
        ctSize ?? "h-10 px-3",
        ctRadius ?? "rounded-lg",
        ctText ?? 'font-bold text-[16px] text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
