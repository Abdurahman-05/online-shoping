import search from "./assets/search.svg";
import heart from "./assets/HeartIcon.svg";
import cart from "./assets/Cart1.svg";
import user from "./assets/user.svg";
import "./Nav.css";

const NavBar = () => {
  return (
    <section className=" w-full h-20  flex justify-center items-center body-font border-b border-[#b9b9b9] py-14">
      <nav className=" w-full max-w-7xl flex justify-between items-center md:px-6">
        <ul className=" w-full flex justify-between items-center    ">
          <li className=" w-12 h-12 flex  items-center ">
            <a href="/" className=" ">
              <h1 className="text-2xl ">Exclusive</h1>
            </a>
          </li>

          <div className="  h-full flex justify-between gap-9 items-center">
            <li>
              <a href="/home" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="nav-item">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-item">
                Contact
              </a>
            </li>
          </div>
          <div className=" h-full inline-flex justify-between items-center gap-2">
            <li className=" w-72  h-full  flex items-center bg-[#F5F5F5]  relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className=" w-full pl-4 h-[38px]  py-5 rounded-md bg-[#F5F5F5]  text-white"
              />
              <img
                src={search}
                alt="search"
                className="w-6 h-6 absolute left-[88%] "
              />
            </li>
            <li>
              <a href="/account" className="nav-item">
                <img src={heart} alt="heart" className=" " />
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-item">
                <img src={cart} alt="cart" className=" " />
              </a>
            </li>
            <li>
              <a href="/account" className="nav-item">
                <img src={user} alt="user" className=" " />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
