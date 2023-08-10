import ProfileHeader from "@components/organisms/Header/ProfileHeader";
import Content from "@layouts/Content";
import React, { memo } from "react";
import ProfileFeatureUi from "./ProfileFeatureUi";
import Header from "@components/atoms/Header";

const ProfileContainer = () => {
  return (
    <>
     <Header isAuth/>
      <Content>
        <ProfileFeatureUi />
      </Content>
    </>
  );
};

export default memo(ProfileContainer);
