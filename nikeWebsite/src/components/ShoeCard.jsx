const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-black"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 shadow-lg`} // Added shadow-lg class here
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-gray-400 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          className='object-contain h-[103px] w-[127px]' 
        />
      </div>
    </div>
  );
};

export default ShoeCard;