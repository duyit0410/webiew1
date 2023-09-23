import React, { useEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomTab, { bottomTabData } from './BottomTab';
import ModalError from '@components/mocules/Modal/ModalError';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { handleModalError } from '@redux/ModalSlice';


const Layout = () => {
  const dispatch = useAppDispatch()

  const {modalError} = useAppSelector(state => state.modal)

  const pathname = useLocation().pathname

  const isBtmTab = useMemo(() => {
    return bottomTabData.find(item => item.path === pathname)
  },[pathname])


  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  // },[])

  return (
    <div className='flex flex-col h-screen w-screen'>
      <Outlet/>
      {isBtmTab && <BottomTab/>}
      <ModalError {...modalError} onClose={() => dispatch(handleModalError({
        visible: false
      }))}/>
    </div>
  );
};

export default React.memo(Layout);