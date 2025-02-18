import { star } from "../assets/icons"
function PopularProductCard({name, imgURL, price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} width={280} height={280} />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="text-xl leading-normal text-gray-500">(4.5)</p>
        </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
          <p className="mt-2 font-semibold text-red-400 text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard