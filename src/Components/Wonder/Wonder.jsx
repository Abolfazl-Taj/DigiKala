import pic1 from '../../Assets/Imgs/WonderPic.png'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiShoppingCart , CiShare2 , CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';

import './Wonder.css'
import Data_Wonder_Slids from '../../Assets/Data/Data_Wonder_Slids';
const Wonder = () => {
  const  Icons = [<CiShoppingCart/>,<CiShare2/>,<CiHeart/> ,<IoEyeOutline/>];
  return (
    <div class="Wonder continer">
        <div className="Wonder_Left">
        <Swiper 
        slidesPerView={4}
        spaceBetween={2}
        navigation={true}
        loop={true} 
        modules={[Navigation]} 
        className="mySwiper">
          {Data_Wonder_Slids.map((data)=>{
            return  <SwiperSlide class="swiper-slide        Prodouct_Slide">
                <img src={data.pic} alt="product_pic" class="Prodcout_Slider_Pic" />
                <h3 className="Prodouct_Name">{data.text}</h3>
                <p className="Product_Price">{data.price}</p>
                <div className="Slider_Icons">
                {Icons.map(icon=> <i>{icon}</i>  )}
                </div>
            </SwiperSlide>
          })}
        </Swiper>
        </div>
        <div className="Wonder_Right">
          <img src={pic1} alt="Wonder_Offer_Pic" className='Wonder_Offer_Pic' />
          <p className="Wonder_Desc">نمایش همه</p>
        </div>
    </div>
  )
}

export default Wonder