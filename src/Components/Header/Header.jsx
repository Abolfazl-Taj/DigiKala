import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Header.css'
import Data_Slider_Items from '../../Assets/Data/Data_Slider_Items';
const Header = () => {
  return (
    <div class='Header'>
      <Swiper 
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
      className="mySwiper">
          {Data_Slider_Items.map((data)=>{
            return <SwiperSlide>

              <img src={data.pic} alt="Slider_Header_Photo" />

            </SwiperSlide>
          })}
      </Swiper>
      
    </div>
  )
}

export default Header