
function PopularProductCard({name, imgURL, price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:ml-[8%] ">
        <img src={imgURL} alt={name} width={280} height={280} />
        <div className="mt-8 flex justify-start gap-2.5"></div>
    </div>
  )
}

export default PopularProductCard