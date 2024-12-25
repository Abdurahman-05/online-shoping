import img from "../assets/bg.jpg";
import CartButton from "../component/CartButton";
import Barkstart from "../assets/ProductCard_Icons/Vector.svg"
import Lightstart from "../assets/ProductCard_Icons/StarLight.svg"

const ProductCard = () => {
  const rating = 4;
    const handlClick = () => {
        console.log("clicked");
    };
  return (
    <div className=" w-fit max-w-[320px] h-auto max-h-[420px] rounded-lg shadow-2xl flex flex-col justify-between items-center   overflow-hidden ">
      <div className="w-full h-[300px] bg-gray-200 rounded-md bg-cover">
        <img className="w-full h-full object-cover" src={img} alt="netimg" />
      </div>
      <div className="w-11/12  rounded-md">
      <div className="w-full   flex flex-row gap-24 items-center mt-2">
          <h1 className=" font-bold">Product Name</h1>
          <div className="w-6 h-6  flex  justify-center items-center">
            {[...Array(rating)].map((_, index) => (
              <img key={index} src={Lightstart} alt="start" />
            ))}
            {[...Array((5-rating))].map((_, index) => (
              <img key={index} src={Barkstart} alt="start" />
            ))}
          </div>
        </div>
        <h2 className=" font-bold">Product Price ETB</h2>
      </div>
      <div className="w-11/12  ">
        <p className="text-[#585858] text-sm text-wrap">Product Description</p>
      </div>
      <div onClick={handlClick} className="w-[300px] h-[50px]  mt-2 ">
        <CartButton />
      </div>
    </div>
  );
};

export default ProductCard;
