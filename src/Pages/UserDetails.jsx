import NavBar from "../navBar";

const UserDetails = () => {
  return (
    <section className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full absolute top-0">
        <NavBar />
      </div>
      <div className="w-full max-w-7xl pr-12 h-12  flex justify-end items-center">
          <p className=" font-bold">Welcome! <span className=" text-[#DB4444]">Md Rimel</span></p>
      </div>

      <section className="w-1/2 h-3/4 max-h-[600px] bg-white rounded-lg shadow-lg flex flex-col px-16 pt-12 mt-4">
        <div className=" w-full ">
          <h1 className="text-xl font-[500] text-[#DB4444] ">
            Edit Your Profile
          </h1>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2">
          <div className="w-full flex">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="FirstName">First Name</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="text"
                name="FirstName"
                placeholder="First Name"
                id="FirstName"
              />
            </div>
            <div className="w-1/2  flex flex-col">
              <label htmlFor="LastName">Last Nam</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="LastName"
                name="LastName"
                placeholder="Last Name"
                id="LastName"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2">
          <div className="w-full flex">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                id="email"
              />
            </div>
            <div className="w-1/2  flex flex-col">
              <label htmlFor="Address">Address</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="Address"
                name="Address"
                placeholder="example, 5236, United State"
                id="Address"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password Changes</label>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          ></input>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="NewPassword"
            placeholder="New Password"
            id="NewPassword"
          ></input>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            id="ConfirmPassword"
          ></input>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2 justify-end">
          <div className=" w-[40%] h-24 flex  mt-4 gap-2">
            <button className="w-1/3 h-12   rounded-sm hover:bg-[#dedede]">Cancel</button>
            <button className="px-4 w-2/3 h-12 bg-[#DB4444] hover:bg-[#d65757] text-white rounded-sm">
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserDetails;
