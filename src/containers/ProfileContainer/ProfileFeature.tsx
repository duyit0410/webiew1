import Text from "@components/atoms/Text/Txt";
import IconWrapper from "@components/atoms/Wrapper/IconWrapper";
import React, { memo, useMemo } from "react";
import { MdPayment } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";


interface IProfileFeature {}
const ProfileFeature = () => {
  const featureData = useMemo(
    () => [
      { text: "Đơn hàng", icon: <MdPayment />, onClick: () => {} },
      { text: "Voucher", icon: <MdPayment />, onClick: () => {} },
      { text: "ô 3", icon: <MdPayment />, onClick: () => {} },
      { text: "ô 4", icon: <MdPayment />, onClick: () => {} },
      { text: "ô 4", icon: <MdPayment />, onClick: () => {} },

    ],
    []
  );
  return (
    <>
    <div className="mt-2 flex justify-between py-3">
      <Text text='Đơn hàng của tôi' type="tt"/>
      <SlArrowRight />
    </div>
      <div className="flex w-full justify-between">
        {featureData.map((item, i) => (
          <div className="flex flex-col items-center gap-1">
            <IconWrapper key={i}>{item.icon}</IconWrapper>
            <Text text={item.text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(ProfileFeature);
