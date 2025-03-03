import { star } from "../assets/icons"
function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
          src={imgURL}
          alt="customer"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
        <div className="mt-3 justify-center items-center gap-2.5 flex">
            <img src={star} width={24} height={24} className="object-contain m-0" />
            <p className="text-xl text-gray-500">({rating})</p>
        </div>
        <h3 className="mt-2 text-xl text-center font-po font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard