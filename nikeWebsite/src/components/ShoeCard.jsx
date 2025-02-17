function ShoeCard({imgURL, changeBigShoeImage, bigShoeImage}) {
  const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe) 
      changeBigShoeImage(imgURL.bigShoe);
  }
  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImage===imgURL
        ? 'border-red-400' : 'border-transparent' 
      } cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick}
      ></div>
  )
}

export default ShoeCard