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
        <p className="font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arivals, quality comfort, and innovation for your active life.</p>
        <Button label="View Details"  />
      </div> 
    </section>
  )
}

export default SuperQuality