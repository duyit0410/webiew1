import React, { ReactNode, memo } from 'react';

interface IIconWrapper {
  children: ReactNode
}
const IconWrapper = ({
children
}:IIconWrapper) => {
  return (
    <div className='h-12 aspect-square rounded-full bg-main/30 text-main flex items-center justify-center text-[24px]'>
      {children}
    </div>
  );
};

export default memo(IconWrapper);