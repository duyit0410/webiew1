import MySwiper from "@components/atoms/MySwiper";
import HomeHeader from "@components/organisms/Header/HomeHeader";
import Content from "@layouts/Content";
import React from "react";
import banner1 from "@assets/images/banner/banner1.jpg";
import banner2 from "@assets/images/banner/banner2.jpg";

const HomeContainer = () => {
  return (
    <>
      <HomeHeader />
      <Content>
        <MySwiper data={swiperData} />
      </Content>
    </>
  );
};

export default React.memo(HomeContainer);

const swiperData = [banner1, banner2];
