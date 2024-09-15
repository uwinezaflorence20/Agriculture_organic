import HomePage from "./Components/HomePage"

import Navbar from "./Components/Navbar"
import SecondPage from "./Components/ImagePage"
import About from "./Components/About"
import FoodCards from "./Components/FoodCards"
import Testimonial from "./Components/Testimonial"
import Offer from "./Components/Offer"
import Whoweare from "./Components/Whoweare"

import AnotherPart from "./Components/AnotherPart"
import NewsPage from "./Components/NewPage"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
    <SecondPage/>
    <About/>
    <FoodCards/>
    <Testimonial/>
    <Offer/>
    <Whoweare/>
    <AnotherPart/>
    <NewsPage/>
    <Footer/>
    </div>
  )
}

export default App