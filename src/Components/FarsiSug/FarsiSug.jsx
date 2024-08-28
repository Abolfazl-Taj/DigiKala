import Data_FarsiSug_Items from '../../Assets/Data/Data_FarsiSug_Items'
import './FarsiSug.css'
const FarsiSug = () => {
  return (
    <div class="continer FarsiSug">
      <h3 className="Sug_Header">پیشنهاد فارسی کالا</h3>

      <div className="Product_Continer">
      {Data_FarsiSug_Items.map((data=>{
        return <div className="SugProdouct">
          <div className="Sug_Prodouct">
            <h4 className="Sug_Cat">{data.Cat}</h4>
            <p className="Sug_Desc">{data.Desc}</p>
          </div>
          <div className="Sug_Pics">
            <img src={data.Pic1} alt="Prodouct_Pic" class="Sug_Img" />
            <img src={data.Pic2} alt="Prodouct_Pic" class="Sug_Img" />
            <img src={data.Pic3} alt="Prodouct_Pic" class="Sug_Img" />
            <img src={data.Pic4} alt="Prodouct_Pic" class="Sug_Img" />
            </div>
        </div>
      }))}
      </div>
    </div>
  )
}
export default FarsiSug
        
