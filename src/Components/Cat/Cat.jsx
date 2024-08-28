import Data_Cat_Items from '../../Assets/Data/Data_Cat_Items'
import './Cat.css'
const Cat = () => {
    
  return (
    <div class='Cat continer'>
        {Data_Cat_Items.map((item)=>{
            return <div className="Cat_Item">
                <img src={item.pic} alt="Cat_Logo" />
                <p className="Cat_Desc">{item.text}</p>
            </div>
        })}


    </div>
  )
}

export default Cat