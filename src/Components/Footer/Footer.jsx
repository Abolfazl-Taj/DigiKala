import "./Footer.css";
import Footer_Bottom from "./Footer_Bottom/Footer_Bottom";
import Footer_Middle from "./Footer_Middle/Footer_Middle";
import Footer_Top from "./Footer_Top/Footer_Top";

const Footer = () => {
  return (
    <div className='Footer'>
        <Footer_Top />
        <Footer_Middle/>
        <Footer_Bottom  />
    </div>
  )
}

export default Footer