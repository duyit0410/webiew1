import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomTab, { bottomTabData } from './BottomTab';

const ScreenLayout = () => {
  const pathname = useLocation().pathname

  const isBtmTab = useMemo(() => {
    return bottomTabData.find(item => item.path === pathname)
  },[pathname])

console.log(window.outerHeight);


  return (
    <div className='flex flex-col h-screen w-screen'>
      <Outlet/>
      {isBtmTab && <BottomTab/>}
    </div>
  );
};

export default React.memo(ScreenLayout);