import MySwiper from "@components/atoms/MySwiper";
import Container from "@layouts/Container";
import React from "react";
import banner1 from "@assets/images/banner/banner1.jpg";
import banner2 from "@assets/images/banner/banner2.jpg";
import test from "@assets/images/test/test.jpg";
import HomeHeader from "@components/atoms/Header/HomeHeader";

const Home = () => {
  return (
    <>
    <HomeHeader/>
    <MySwiper data={[test]}/>

      <Container>
      </Container>
    </>
  );
};

export default Home;
