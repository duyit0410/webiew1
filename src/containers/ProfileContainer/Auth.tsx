import Button from "@components/atoms/Button";
import React, { memo, useMemo } from "react";

interface IAuth {
  login?: () => void;
  register: () => void;
}
const Auth = ({ register, login }: IAuth) => {
  const buttonData = useMemo(
    () => [
      {
        text: "login",
        onClick: login,
      },
      {
        text: "register",
        onClick: register,
      },
    ],
    [register, login]
  );

  return (
    <div className="flex justify-between w-max gap-2">
    {buttonData.map((item, i) => (
      <Button
      ctBgColor
      ctText
      className=" text-app capitalize bg-white border-1 border-app border-solid"
      key={i} children={item.text} onClick={item.onClick} />
    ))}
  </div>
  );
};

export default memo(Auth);
