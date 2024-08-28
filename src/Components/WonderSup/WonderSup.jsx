import './WonderSup.css'
import { CiShoppingBasket } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Data_Wonder_Pics from '../../Assets/Data/Data_Wonder_Pics';

const WonderSup = () => {
  return (
    <div class='WonderSup continer'>
        <div className="Wonder_Button">
            <button>بیش از 90 کالا </button>
            <i><FaLongArrowAltLeft/></i>
        </div>
        <div className="WonderSup_Items">
            {Data_Wonder_Pics.map(pic=><img src={pic} alt="Prodouct_Pic" />)  }
        </div>
        <div className="WonderSup_Texts">
            <h2 className="WonderSup_Header">شگفت انگیز های سوپر مارکتی</h2>
            <i class="WonderSup_Cart"><CiShoppingBasket /></i>
        </div>
    </div>
  )
}

export default WonderSup