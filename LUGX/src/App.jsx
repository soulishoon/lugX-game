import Navbar from "./Components/navbar"
import Hero from "./Components/hero";
import SiteReach from "./Components/sitereach";
import Trend from "./Components/trend";
import TopGames from "./Components/topgames";
import TopCategory from "./Components/topcategory";

function App() {


  return (
    <div>

        <Navbar></Navbar>

      <div className="bg-[url('/public/resources/bg.jpg')]  bg-cover bg-center rounded-br-[150px] rounded-bl-[150px]">
        <Hero></Hero>


      </div>


      <SiteReach></SiteReach>
      <Trend></Trend>
      <TopGames></TopGames>
      <TopCategory></TopCategory>
    </div>
  )
}

export default App
