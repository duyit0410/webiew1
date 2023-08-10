import classNames from "classnames";
import React, { memo } from "react";
import Input from "../Input";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import Auth from "@containers/ProfileContainer/Auth";

interface IHeader {
  isAuth?: boolean;
}
const Header = ({ isAuth }: IHeader) => {
  const login = () => {};
  const register = () => {};
  return (
    <div
      className={classNames(
        `bg-app px-3 py-2`
      )}
    >
      <div className="flex w-full gap-2 items-center">
        <Input
          className="rounded-lg"
          placeholder="Nhập sản phẩm muốn tìm"
          leftIcon={<BsSearch />}
        />
        <AiOutlineSetting className="text-white text-[24px]" />
      </div>
      {isAuth && (
        <div className="flex justify-between mt-6">
          <div className=" bg-white h-8 aspect-square rounded-full flex items-center justify-center">
            <BiSolidUser className="text-app text-[20px]" />
          </div>
          <Auth register={register} login={login} />
        </div>
      )}
    </div>
  );
};

export default memo(Header);
