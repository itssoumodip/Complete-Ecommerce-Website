import Button from "../components/Button"
function SuperQuality() {
  return (
    <section
      id="about-us"
      className="border-3 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-red-400"> Super</span>
          <span className="text-red-400"> Quality </span>
         Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg text-gray-600">Ensuring premium comfort and style, our meticulously creafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg text-gray-600">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <Button label="View Details"  />
        </div>
      </div> 
    </section>
  )
}

export default SuperQuality