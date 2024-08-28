import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Data_Category_Pics from '../../Assets/Data/Data_Category_Pics';
import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css'


const Category = () => {
  return (
    <div className="Category continer">
        <h1 className="Category_Text">دسته بندی های فارسی کالا</h1>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={6}
        loop={true}
        modules={[Pagination]}
        className="mySwiper Category_Slider"
      >
        {Data_Category_Pics.map((data)=>{
            return <SwiperSlide className='swiper-slide Slide_Cat'>
                    <img src={data.pic} alt="Category_Item_Pic" class="Category_Pic" />
                    <h4 className="Category_Name">{data.text}</h4>
            </SwiperSlide>
        })}




      </Swiper>
    </div>
  )
}

export default Category
