import {Data_Download_Item, Data_Footer_Icons, Data_Footer_Lists} from "../../../Assets/Data/Data_Footer_Lists"
import pic1 from '../../../Assets/Imgs/Logo.png'
import { FaSearch } from "react-icons/fa";

import "./Footer_Middle.css"

const Footer_Middle = () => {
  return (
    <div className={`Footer_Middle`}>
            <div className="Footer_Lists">
                    {Data_Footer_Lists.map(item=>{
                        return(
                            <div className="Footer_List">
                                <h2 className="List_Header">{item.header}</h2>
                                {item.texts.map(li=><p class="Footer_Item">{li}</p>)}
                            </div>
                        )
                    })}
                    <div className="Footer_Fallow">
                    <h2 className="List_Header">با ما باشید</h2>
                    <div className="Footer_Socials">
                        {Data_Footer_Icons.map(item => <i className="bg-white text-gray-600 text-[18px]  ">{item}</i>  )}
                    </div>
                    <div className="Footer_Form">
                                  <i><FaSearch/></i>
                                <input type="text" className="Footer_Input" placeholder="...جستجو "  />
                        </div>
                    </div>
            </div>  
            <div className="Footer_App">
                <div className="Footer_App_Left">
                <img src={pic1} alt="" class="w-[100px] text-[#ffff] Logo_Footer" />
                <h3 className="Footer_App_Header">دانلود اپلیکیشن فارسی کالا</h3>
                </div>
                <div className="Footer_App_Right">
                    {Data_Download_Item.map(item=> <img src={item} class="w-[150px] mx-1" alt="Download_Now" />  )}
                </div>
            </div>

    </div>
  )
}


export default Footer_Middle