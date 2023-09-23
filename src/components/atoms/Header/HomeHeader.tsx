import React, { memo, useMemo, useState } from "react";
import Input from "../Input";
import Txt from "../Text/Txt";
import Icon from "../Icon/Icon";
import classNames from "classnames";


const HomeHeader = () => {
  const [value, setValue] = useState("");

  const iconData = useMemo(
    () => [
      {
        icon: "icon-cart text-24",
        onClick: () => {},
      },
      {
        icon: "icon-msg text-20",
        onClick: () => {},
      },
    ],
    []
  );

  return (
    <>
      <div className="fixed z-10 w-full top-0 left-0 flex gap-2 items-center bg-app p-2 bg-opacity-0">
        <Input
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {iconData.map((item, i) => (
          <i
            className={classNames(item.icon, "font-bold text-white")}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default memo(HomeHeader);
