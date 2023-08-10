import React, { memo } from 'react';
import {Swiper, SwiperSlide, useSwiper, SwiperClass} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface IMySwiper {
  data: string[]
}
const MySwiper = ({
  data
}:IMySwiper) => {
  return (
 <div className='swiper-wraper h-[120px] w-full'>
     <Swiper pagination={true} modules={[Pagination, Autoplay]} loop className="mySwiper w-full h-full"
     autoplay
     >
       {data.map((item, i) => (
        <SwiperSlide>
          <img alt='' src={item} key={i} className='w-full h-full'/>
        </SwiperSlide>
       ))}
      </Swiper>
 </div>
  );
};

export default memo(MySwiper);