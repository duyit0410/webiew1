import React, { ReactNode, memo } from "react";
import classNames from "classnames";
interface IIModalWrapperProps {
  children: ReactNode;
  onClose?: () => void;
  closeOutside?: boolean;
  noZ?: boolean;
}
const ModalWrapper = ({
  children,
  closeOutside,
  onClose,
  noZ,
}: IIModalWrapperProps) => {
  return (
    <>
      <div
        className={classNames(`absolute inset-0 bg-black/30 z-[1]`)}
        onClick={closeOutside ? onClose : () => {}}
      ></div>
      <div
        className={classNames(
          `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[300px] min-h-[160px] p-5 bg-white shadow-[0_0_50px] shadow-app/25 rounded-2xl flex items-center justify-center`,
          noZ ?? "z-[2]"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default memo(ModalWrapper);
