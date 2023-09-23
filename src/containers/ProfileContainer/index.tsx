import ProfileHeader from "@components/organisms/Header/ProfileHeader";
import Content from "@layouts/Container";
import React, { memo } from "react";
import ProfileFeature from "./ProfileFeature";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

const ProfileContainer = () => {
  const dispatch = useAppDispatch()
  const {isAuth} = useAppSelector(i => i.auth);

  return (
    <>
      <Content>
        <ProfileFeature />
      </Content>
    </>
  );
};

export default memo(ProfileContainer);
