import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text/Txt";
import React, { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate()

  const buttonData = useMemo(
    () => [
      {
        text: "login",
        onClick: () => navigate('/login'),
      },
      {
        text: "register",
        onClick: () => navigate('/register'),
      },
    ],
    []
  );

  return (
    <div className="flex justify-between w-max gap-2">
    {buttonData.map((item, i) => (
      <Button
      bgColor
      styleText
      className=" text-main capitalize bg-white border-1 border-app border-solid"
      key={i} children={<Text text={item.text}/>} onClick={item.onClick} />
    ))}
  </div>
  );
};

export default memo(Auth);
