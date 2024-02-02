import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className=" shadow-xl">
            <div className="container py-3">
                <div className="flex justify-between items-center">
                    <Link to={"/"}>
                        <img
                            src="/assets/burger.png"
                            alt="BurgerIcon"
                            className="w-16"
                        />
                    </Link>

                    <ul className="hidden md:flex md:items-center md:gap-10 md:text-lg">
                        <li><Link className="hover:text-primary transition-all duration-200 cursor-pointer" to={"/"}>Home</Link></li>
                        <li><Link className="hover:text-primary transition-all duration-200 cursor-pointer" to={"/About"}>About</Link></li>
                        <li><Link className="hover:text-primary transition-all duration-200 cursor-pointer" to={"/Menu"}>Menu</Link></li>
                        <li><Link className="hover:text-primary transition-all duration-200 cursor-pointer" to={"/Services"}>Services</Link></li>
                        <li><Link to={"/Order"}><button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-200">Order</button></Link></li>
                    </ul>

                    <Link to={"/Order"} className="md:hidden">
                        <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-200">Order</button>
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;