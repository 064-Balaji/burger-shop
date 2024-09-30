import { ShoppingCart, User } from "lucide-react";
import { links } from "../utils/consts";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
const goToCart = () =>{
  const navigate = useNavigate();
  navigate("/cart");
}
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-10 py-6">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-all cursor-pointer">
          <Link to={"/"}>Burgee</Link>
        </h2>
        {links.map((link, index) => (
          <Link key={index} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer" >
<Link to='/cart'>
          <ShoppingCart
            height={28}
            width={28}
            className="text-gray-700 hover:text-gray-900 transition-all"
            />
            </Link>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            3
          </span>
        </div>
        <Link to='/profile'>
        <div className="flex items-center gap-3 bg-slate-700 border border-black hover:bg-white hover:text-black transition-all px-4 py-2 rounded-full text-white cursor-pointer">
          <User height={25} width={25} />
          <h2 className="font-medium">Profile</h2>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
