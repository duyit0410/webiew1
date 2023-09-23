import React, { InputHTMLAttributes, ReactNode, memo } from 'react';
import classnames from 'classnames';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  custom?: boolean;
}
const Input = ({
  inputClass,
  leftIcon,
  rightIcon,
  className,
  value,
  custom,
  ...rest
}: IInput) => {
  return (
    <div
      className={classnames(
        'flex items-center ',
        custom ?? 'gap-2 w-full px-3 h-10 sm:h-[60px] bg-white rounded-lg',
        className,
      )}>
      {leftIcon}
      <input
        value={value}
        className={classnames(
          'bg-transparent h-full  w-full focus:outline-none rounded-[inherit]',
          inputClass,
        )}
        {...rest}
      />
      {rightIcon}
    </div>
  );
};

export default memo(Input);
