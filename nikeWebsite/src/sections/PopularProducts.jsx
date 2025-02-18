import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5 border-3"></div>
        <h2 className="text-4xl font-palanquin font-bold">Our 
          <span className="text-red-400"> Popular </span>
          Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat">Experience top-notch quality and style with our sought-after selections. Discover a World of comphort, design, and value</p>
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <PopularProductCard key = 
            {product.name} {...product} />
          ))}
        </div>
    </section>
  )
}

export default PopularProducts