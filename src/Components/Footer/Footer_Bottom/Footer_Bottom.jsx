import Data_Footer_Validations from "../../../Assets/Data/Data_Footer_Validations"
import "./Footer_Bottom.css"

const Footer_Bottom = () => {
  return (
    <div className={`Footer_Bottom`}>
        <h1 className="Footer_FasrisKala">فروشگاه اینترنتی فارسی کالا، بررسی، انتخاب و خرید آنلاین</h1>
        <div className="Footer_Validations">
            <p class='Footer_Desc'>فارسی کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت فارسی کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
            </p>
                <div className="Footer_Validation">
                    {Data_Footer_Validations.map(data=> <img src={data} alt="Validation_Logo" />  )}
                </div>
        </div>
        <p className="Footer_ForUs">
        استفاده از مطالب فروشگاه فارسی کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرک تفارسی کالا (فروشگاه آنلاین فارسی کالا) می‌باشد.
        </p>

    </div>
  )
}

export default Footer_Bottom