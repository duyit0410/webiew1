import React, { InputHTMLAttributes, ReactNode, memo } from "react";
import classnames from "classnames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  custom?: boolean;
  className?: string;
}
const Input = ({
  inputClass,
  leftIcon,
  rightIcon,
  className,
  custom,
  ...rest
}: IInput) => {
  return (
    <div
      className={classnames(
        "flex items-center gap-2",
        custom ?? "h-[32px] w-full bg-white px-3",
        className
      )}
    >
      {leftIcon}
      <input className={classnames("bg-[inherit] h-full w-full focus:outline-none rounded-[inherit]", inputClass)} {...rest} />
      {rightIcon}
    </div>
  );
};

export default memo(Input);
