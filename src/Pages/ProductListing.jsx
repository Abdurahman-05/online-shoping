import ProductCard from '../component/ProductCard';
import NavBar from '../navBar';


function ProductListing() {
  const num = 8
  return (
    <section className=" w-full   h-fit  flex flex-col justify-center items-center">
      <div className="w-full   ">
        <NavBar />
      </div>
      <section className="w-full  h-fit  max-w-7xl flex flex-col items-center justify-center">
        <div className="w-full h-1/2 flex justify-center items-center mt-8">
          <div className="w-full max-w-7xl h-1/2 flex justify-start i">
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
        </div>
        <div className="w-full h-fit grid grid-cols-4 gap-4  p-4 mt-6">
          {[...Array(num)].map((_, index) => (
            <ProductCard key={index} />
          ))}
          
        </div>
      </section>
    </section>
  )
}

export default ProductListing;