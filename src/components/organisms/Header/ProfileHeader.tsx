import React, { memo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import Auth from "@containers/ProfileContainer/Auth";
import Header from "@components/atoms/Header";

const ProfileHeader = () => {
  const login = () => {};
  const register = () => {};

  return (
    <>
    <Header/>
      <div className="h-[200px] w-full bg-app">
        <div className="flex justify-between">
          <div className=" bg-white h-8 aspect-square rounded-full flex items-center justify-center">
            <BiSolidUser className="text-app text-[20px]" />
          </div>
          <Auth register={register} login={login} />
        </div>
      </div>
    </>
  );
};

export default memo(ProfileHeader);
