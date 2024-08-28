import './Search.css';
import logo from '../../Assets/Imgs/icon.png'
import { IoSearchOutline } from "react-icons/io5";
import Data_Search_Items from '../../Assets/Data/Data_Search_Items';
const Search = () => {

  return (
    <>
    
    <div class="Search ">
        <div className="Search_Bar ">
                <img src={logo} alt="Dgkala_Logo" />
                <div className="Search_Continer">
                    <input class='Search_Input' type="text" placeholder='جستجو' />
                    <i className='Search_Icon'><IoSearchOutline/></i>
                </div>
        </div>
        <div className="Search_Contact">
            {Data_Search_Items.map((item)=>{
                  return  <div className="Search_Items">
                        <i class='Contact_Icon'>{item.icon}</i>
                        <div className="Search_IText">
                            <h3 className="Search_Header"> <p> {item.header}</p>  </h3>
                            <p className="Search_Desc">{item.desc}</p>
                        </div>

                  </div>
            })}
        </div>
    </div>
    
    <hr />
    </>

  )
}

export default Search