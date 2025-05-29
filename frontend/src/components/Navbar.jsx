import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="group">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden group-[.active]:block" />
        </NavLink>
        <NavLink to="/doctors" className="group">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden group-[.active]:block" />
        </NavLink>
        <NavLink to="/about" className="group">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden group-[.active]:block" />
        </NavLink>
        <NavLink to="/contact" className="group">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden group-[.active]:block" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-[#5F6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
