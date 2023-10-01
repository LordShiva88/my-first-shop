import { useContext } from "react";
import image from "../../assets/model.png";
import { MyAuthContext } from "../../Pages/Context/AuthContext";



const Banner = () => {

  const {sortBySearch} = useContext(MyAuthContext)





  const handleBtn = (e) =>{
    e.preventDefault();
    const text = e.target.input.value;
    return sortBySearch(text)
  }



  return (
    <div className="flex justify-between bg-red-100 md:p-10 p-0 items-center flex-col md:flex-row">
      <div className="flex-1  p-5">
        <div>
          <h2
            className="text-5xl font-bold 
        leading-snug"
          >
            An exciting place for the whole family to shop
          </h2>
          <p className="text-gray-500 mt-4 text-xl font-semibold">
            {" "}
            Where trends come to life, Experience the epitome of lifestyle
          </p>
          <form onSubmit={handleBtn} className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] mt-10 flex-1">
            <input
            name="input"
              type="text"
              className="peer h-full w-full rounded-[7px] border border-gray-400 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Search here"
              required
            />
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg"
              type="submit"
              data-ripple-light="true"
              
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Banner;
