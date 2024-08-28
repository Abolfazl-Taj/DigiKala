import "./FarsiPluse.css"
import bg from '../../Assets/Imgs/Bg.png'
import Data_FarsiPlus_Items from '../../Assets/Data/Data_FarsiPlus_Items'
import { BsGiftFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
const FarsiPluse = () => {
  return (
    <div className="FarsiPluse continer">
        <div className="FarsiPluse_Text">
                <h1 className="FarsiPluse_Header">
                    FarsiPlus
                </h1>
                <p className="FarsiPluse_Desc">خدمات ویژه برای اعضای دیجی پلاس</p>
                <button className="FarsiPluse_Btn"><i><IoIosArrowBack/></i> <p>عضویت</p>   </button>
                <img src={bg} alt="DgPluse_Pic" />
        </div>
            {
            Data_FarsiPlus_Items.map((data)=>{
                return <div className="FarsiSug_Prodouct">
                        <div className="Prodcout_Text">
                                <h2><i><BsGiftFill /></i>   <p>هدیه ی نقدی</p>     </h2>
                                <h2>شاهده ی همه</h2>
                        </div>
                        <div className="Prodocuts_Pic">
                            <img className="FarsiPluse_Img" src={data.Pic1} alt="Prodcout_Pic" />
                            <img className="FarsiPluse_Img" src={data.Pic2} alt="Prodcout_Pic" />
                            <img className="FarsiPluse_Img" src={data.Pic3} alt="Prodcout_Pic" />
                            <img className="FarsiPluse_Img" src={data.Pic4} alt="Prodcout_Pic" />
                            <img className="FarsiPluse_Img" src={data.Pic5} alt="Prodcout_Pic" />
                            <img className="FarsiPluse_Img" src={data.Pic6} alt="Prodcout_Pic" />
                        </div>
                </div>
            })
            }
    </div>
  )
}

export default FarsiPluse