import IconWrapper from "@components/atoms/Wrapper/IconWrapper";
import React, { memo, useMemo } from "react";

interface IProfileFeatureUi {}
const ProfileFeatureUi = () => {
  const featureData = useMemo(
    () => [
      { text: "Đơn hàng", icon: <></>, onClick: () => {} },
      { text: "Voucher", icon: <></>, onClick: () => {} },
      { text: "ô 3", icon: <></>, onClick: () => {} },
      { text: "ô 4", icon: <></>, onClick: () => {} },
    ],
    []
  );
  return (
    <div className="flex gap-4">
      {featureData.map((item, i) => (
        // <div key={i} className="flex flex-col justify-between items-center">
        //   {item.icon}
        // </div>
        <IconWrapper>
          {item.icon}
        </IconWrapper>
      ))}
    </div>
  );
};

export default memo(ProfileFeatureUi);
