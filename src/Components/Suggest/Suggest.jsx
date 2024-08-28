import Data_Suggest_Items from '../../Assets/Data/Data_Suggest_Items'
import './Suggest.css'
const Suggest = () => {
  return (
    <div class="Suggest continer">
        <h1 className="Suggest_Heder">
            پیشنهاد فارسی کالا
        </h1>
        <div className="Suggest_Products">
            {Data_Suggest_Items.map((data)=>{
                return <div className="Suggest_Item">
                    <img src={data.pic} alt="Prodouct_Pic" class="Suggest_Pic" />
                    <p className="Suggest_Prodouct_Name">
                        {data.text}
                        </p>                                
                </div>
            })}
        </div>
    </div>
  )
}

export default Suggest