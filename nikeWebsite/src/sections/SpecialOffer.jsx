import { arrowRight } from "../assets/icons"
import {offer} from "../assets/images"
import Button from "../components/Button"

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={713} height={687} className="object-contain w-full" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-400"> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg text-gray-600">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From selections to incredible savings, we offer unparalielled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg text-gray-600">
          Navigate a realm of possiblities designed to fulfill your unique desires surpassing the loftiest of expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        </div>
      </div>    
    </section>
  )
}

export default SpecialOffer