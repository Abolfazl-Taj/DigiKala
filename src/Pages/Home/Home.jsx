import Data_Ad1_Items from '../../Assets/Data/Data_Ad1_Items'
import Data_Ad2_Items from '../../Assets/Data/Data_Ad2_Items'
import Data_Ad3_Items from '../../Assets/Data/Data_Ad3_Items'
import Data_Ad4_Items from '../../Assets/Data/Data_Ad4_Items'
import Ads from '../../Components/Ads/Ads'
import Articles from '../../Components/Articles/Articles'
import Cat from '../../Components/Cat/Cat'
import Category from '../../Components/Category/Category'
import FarsiPluse from '../../Components/FarsiPluse/FarsiPluse'
import FarsiSug from '../../Components/FarsiSug/FarsiSug'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Pop from '../../Components/Pop/Pop'
import Search from '../../Components/Search/Search'
import Suggest from '../../Components/Suggest/Suggest'
import Wonder from '../../Components/Wonder/Wonder'
import WonderSup from '../../Components/WonderSup/WonderSup'
import './Home.css'

const Home = () => {
  return (
    <div id='top' class='Home'>
        <Search />
        <Navbar />
        <Header />
        <Cat/>
        <Wonder/>
        <WonderSup/>
        <Ads  data={Data_Ad1_Items} adclass={"add1"}   />
        <Category/>
        <Ads  data={Data_Ad2_Items} adclass={"add2"}   />
        <Suggest />
        <Ads  data={Data_Ad3_Items} adclass={"add2"}   />
        <Pop/>
        <FarsiSug/>
        <FarsiPluse/>
        <Ads  data={Data_Ad4_Items} adclass={"add3"}   />
        <Articles/>
        <Footer/>
    </div>
  )
}

export default Home