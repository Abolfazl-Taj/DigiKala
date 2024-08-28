import './Footer_Top.css'
import pic from '../../../Assets/Imgs/farsikala.png'
import Data_Footer_Feua_Item from '../../../Assets/Data/Data_Footer_Feua_Item'
import { IoIosArrowUp } from "react-icons/io";
const Footer_Top = () => {

    
  return (
    <div className={`Footer_Top continer`}>
            <div className="Footer_Info">
                <div className="Footer_Info_Left">
                    <button class="Footer_Btn"> <a href="#top" class="flex items-center jsutify-center ">     <i><IoIosArrowUp/></i>    بازگشت به بالا  </a>      </button>
                </div>
                <div className="Footer_Info_Right">
                <img src={pic} alt="Farsi Kala Logo"  className='Footer_Logo' />
                <h5 className="Footer_Contact">.تلفن پشتیبانی: 12345678 - ۰۲۱ | 123456789 - ۰۲۱ | هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</h5>
                </div>
            </div>
            <div className="Footer_Feua">
                    {Data_Footer_Feua_Item.map(item=>{
                        return <div className="Feau_Item">
                            <img src={item.pic} alt="" class="Feau_Pic"   />
                            <p className="Feau_Text">{item.text}</p>
                        </div>
                    })}
            </div>

        
    </div>
  )
}

export default Footer_Top