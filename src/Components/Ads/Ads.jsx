import './Ads.css'
const Ads = ({data , adclass}) => {
  return (
    <div class='Ads continer'>
        {data.map(item=> <img class={`${adclass}`} src={item} alt="Ad_Pic" />)}
    </div>  
  )
}

export default Ads