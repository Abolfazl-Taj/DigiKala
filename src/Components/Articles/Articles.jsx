import Data_Article_Items from "../../Assets/Data/Data_Article_ItemsData_Article_Items"
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";


import "./Articles.css"
const Articles = () => {
  return (
    <div class="Articles continer">
        <h1 className="Articles_Header">خواندنی ها </h1>
            <div className="Articles_Continer">
                {Data_Article_Items.map(item=>{
                    return <div className="Article">
                            <div class="img_c">
                            <img src={item.pic} alt="Article_Picture" class="Article_Img"  />

                            </div>
                            <div className="Article_Texts">
                            <h2 className="Article_Header">{item.header}</h2>
                            <p className="Article_Desc">{item.desc}</p>
                            </div>
                            <div className="Article_Info">
                                <h6 class="Article_Icon"> <p>6 دی 1400</p>  <i><CiCalendarDate/></i>   </h6>
                                <h6 class="Article_Icon"> <p>  وبلاگ</p>   <i><MdOutlineArticle/>   </i>          </h6>
                                <h6 class="Article_Icon"> <p> بدون دیدگاه</p>   <i><FaRegCommentAlt/></i>   </h6>
                            </div>
                    </div>
                })}


            </div>
    </div>
  )
}

export default Articles