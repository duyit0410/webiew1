import React, { ReactNode, memo } from 'react';

interface IIconWrapper {
  children: ReactNode
}
const IconWrapper = ({
children
}:IIconWrapper) => {
  return (
    <div className='bg-app/30 text-app flex items-center justify-center aspect-square h-8 rounded-full '>
      {children}
    </div>
  );
};

export default memo(IconWrapper);