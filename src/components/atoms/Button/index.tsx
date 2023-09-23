import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface IButton{
  children: ReactNode;
  className?: string;
  bgColor?: boolean;
  size?: boolean;
  radius?: boolean;
  styleText?: boolean;
  onClick?: () => void
}
const Button = ({
  children,
  className,
  bgColor,
  size,
  radius,
  styleText,
  onClick
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "",
        bgColor ?? "bg-main",
        size ?? "h-8 px-3",
        radius ?? "rounded-lg",
        styleText ?? 'font-bold text-[16px] text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
