import Txt from "@components/atoms/Text/Txt";
import ModalWrapper from "@components/atoms/Wrapper/ModalWrapper";
import { IModalError } from "@redux/ModalSlice";
import React, { memo } from "react";

interface ModalErrorProps extends IModalError {
  onClose: () => void;
}
const ModalError = ({ onClose, visible, text }: ModalErrorProps) => {
  return (
    <>
      {visible && (
        <ModalWrapper onClose={onClose} closeOutside>
          <div className="flex">
            <Txt text={text} />
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default memo(ModalError);
