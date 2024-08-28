import {useState } from 'react';
import Data_Navbar_Items from '../../Assets/Data/Data_Navbar_Items';
import './Navbar.css'
import { FaRegCircleUser , FaRegHeart , FaShareNodes , FaBoxOpen  } from "react-icons/fa6";
const Navbar = () => {
  const [isTop , SetIstop] = useState(false)
  document.addEventListener("scroll" , ()=>{
    document.documentElement.scrollTop > 100 ? SetIstop(true) : SetIstop(false)
  })
  return (
    <div class={isTop ? "Navbar NavbarCome" : "Navbar"} >
      <div className="Nav_LeftSide">
        <h1 className="Nav_Header">
          <i><FaRegCircleUser/></i>
          <p>ورود|ثبت نام</p>
        </h1>
        <div className="Navbar_Icons">
        <i><FaRegHeart/></i>
        <i><FaShareNodes/></i>
        <i><FaBoxOpen/></i>
        </div>
      </div>
      <div className="Nav_RightSide">
        <ul class="Navbar_List">
        {Data_Navbar_Items.map((data)=>{
            return <li class={`${data.class}`}>
                {data.name}
            </li>
          })}
        </ul>

      </div>
    </div>
  )
}

export default Navbar