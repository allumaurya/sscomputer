import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: npm install lucide-react
import { MdMenu } from "react-icons/md";

import { ImCross } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navb=[
    { logo:<IoMdHome />, name:"Home",path:"/"},
    {  logo: "", name:"About Us",path:"/about"},
    { logo:<FaComputer />, name:"Course", path:"/course"},
    { logo: <MdAppRegistration />, name:"Registration", path:"/Registration"},
    { logo:<FaSignInAlt />, name:"Sign in" ,path: "/SignIn"},
    { logo:<IoIosContact />, name:"Contact",path:"/Contact"},
]
  return (
    <nav className="bg-blue-50 text-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SSCIT</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
            {navb.map((nav, index)=>(
          <Link key={index}  to={nav.path} className="hover:text-gray-300 flex gap-2 font-serif ">{nav.logo}{nav.name}</Link>))}
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navb.map((nav, index)=>(
        
              <Link key={index}  to={nav.path} className="hover:text-gray-300 flex gap-2 ">{nav.logo}{nav.name}</Link>
       ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
