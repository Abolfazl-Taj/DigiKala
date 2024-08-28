import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Pop.css';
import Data_Pop_Item from '../../Assets/Data/Data_Pop_Item';

const Pop = () => {
  return (
    <div className="Pop flex flex-col justify-center items-center continer">
        <h1 className="Pop_Header my-9">محبوب ترین برنده ها</h1>
        <Swiper navigation={true} modules={[Navigation]}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={9}
        className="mySwiper Pop_Slider"
        style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}
        >
            {Data_Pop_Item.map((data=>{
                return <SwiperSlide className='swiper-slide Pop_Slide ' style={{display:"flex" , justifyContent:"center" , alignItems:"center", position:"relative"}}> <img src={data} alt="Branding_Logo" className="Brand_Logo" style={{width:"100%"}} /> </SwiperSlide>
            }))}
        </Swiper>
    </div>
  )
}

export default Pop