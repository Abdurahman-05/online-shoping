import ProductCard from '../component/ProductCard';
import NavBar from '../component/NavBar';
import Footer from "../component/footer";


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
        <div className="w-full h-20 flex items-center justify-center gap-4 mt-8">
          <button className="w-20 h-10 bg-[#DB4444] text-white rounded-md">
            Prev
          </button>
          <button className="w-20 h-10 bg-[#DB4444] text-white rounded-md">
            Next
          </button>
        </div>
      </section>
      <div className=" w-full h-fit  bottom-0 mt-32">
        <Footer />
      </div>
    </section>
  )
}

export default ProductListing;