import React, { memo } from "react";
import Txt from "./Txt";

interface INotiText {
  text: string;
}
const NotiText = ({ text }: INotiText) => {
  return (
    <div className="flex gap-1">
      <i className="icon-warning text-main" />
      <Txt text={text} />
    </div>
  );
};

export default memo(NotiText);
