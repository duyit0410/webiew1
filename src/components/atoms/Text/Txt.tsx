import classNames from "classnames";
import React, { ReactNode, memo, useMemo } from "react";

interface IMyText {
  text: string | ReactNode;
  size?: 12 | 16 | 20;
  className?: string;
}
const Txt = ({ text, size = 16, className }: IMyText) => {
  const _size = useMemo(() => {
    switch (size) {
      case 12:
        return "text-12";
      default:
      case 16:
        return "text-16";
      case 20:
        return "text-10";
    }
  }, [size]);

  return <p className={classNames(_size, className)}>{text}</p>;
};

export default memo(Txt);
