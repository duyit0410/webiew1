import classNames from "classnames";
import React, { memo, useMemo } from "react";

type ISize = 20| 24
interface IIcon {
  size?: ISize;
  className?: string;
  onClick?: () => void;
}
const Icon = ({ size = 24, className, onClick }: IIcon) => {
  const _size = useMemo(() => {
    switch (size) {
      case 20:
        return "text-20`";
      case 24:
        return "text-24";
    }
  }, [size]);

  return (
    <i
      className={classNames(className, _size, "font-bold")}
      onClick={onClick}
    />
  );
};

export default memo(Icon);
