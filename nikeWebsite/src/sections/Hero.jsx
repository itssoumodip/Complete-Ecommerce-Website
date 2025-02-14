import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

function Hero() {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 border-3 border-black p-14">
        <p className="text-xl text-red-400">Our Summer Colection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-red-400 inline-block mt-3">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arivals, quality comfort, and innovation for your active life.</p>
        <Button label = "Shop Now" iconURL = {arrowRight}/>
        <div className="flex border justify-start items-start flex-wrap w-full mt-20 gap-16"> 
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value} </p> 
              <p className="leading-7 font-montserrat text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-300 bg-hero bg-cover bg-center">
        <img src={bigShoe1} width={610} height={500} className="object-contain relative z-10" alt="shoe collection" />
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero