import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import burgerImg from "../../public/assets/burger.png";
import { Link } from "react-router-dom";


const Footer = () => {

    const links = [
        {
            id: 1,
            header: "Important Links",
            pages: [
                {
                    id: 1,
                    name: "Home",
                    link: "/"
                },
                {
                    id: 2,
                    name: "About",
                    link: "/About"
                },
                {
                    id: 3,
                    name: "Services",
                    link: "/Services"
                },
                {
                    id: 4,
                    name: "Order",
                    link: "/Order"
                }
            ]
        },
        {
            id: 2,
            header: "Company Links",
            pages: [
                {
                    id: 1,
                    name: "Home",
                    link: "/"
                },
                {
                    id: 2,
                    name: "About",
                    link: "/About"
                },
                {
                    id: 3,
                    name: "Services",
                    link: "/Services"
                },
                {
                    id: 4,
                    name: "Order",
                    link: "/Order"
                }
            ]
        },
        {
            id: 3,
            header: "Links",
            pages: [
                {
                    id: 1,
                    name: "Home",
                    link: "/"
                },
                {
                    id: 2,
                    name: "About",
                    link: "/About"
                },
                {
                    id: 3,
                    name: "Services",
                    link: "/Services"
                },
                {
                    id: 4,
                    name: "Order",
                    link: "/Order"
                }
            ]
        }
    ]


    const date = new Date();
    const time = date.getFullYear();

    return (
        <footer data-aos="fade-up" data-aos-delay="200" className="bg-gray-100">
            <div className="container">
                <div className="py-8 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="space-y-5">
                            {/* Restaurant logo */}
                            <div className="flex items-center gap-5">
                                <Link to={"/"}>
                                    <img
                                        src={burgerImg}
                                        alt="burgerImage"
                                        className="w-20"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    />
                                </Link>
                                <h1 className="font-bold text-[30px]">Burger Restaurant</h1>
                            </div>
                            <p className="max-w-[400px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil ullam facilis nobis laboriosam aliquam.
                            </p>
                            {/* Div for location and phone no */}
                            <div>
                                {/* Location */}
                                <div className="flex items-center gap-3">
                                    <FaLocationDot />
                                    <p>El-Sheikh-Zayed, Giza</p>
                                </div>
                                {/* Phone No. */}
                                <div className="flex items-center gap-3">
                                    <IoPhonePortraitOutline />
                                    <p>
                                        +201012107269
                                    </p>
                                </div>
                            </div>
                            {/* Social media */}
                            <div className="flex gap-5">
                                <Link to={"https://www.instagram.com/m7moooud_17/"}>
                                    <FaInstagram className="w-10 h-10 cursor-pointer hover:text-[#E1306C] duration-200" />
                                </Link>
                                <Link to={"https://www.facebook.com/mahmoud.medhat.7524"}>
                                    <FaFacebook className="w-10 h-10 cursor-pointer hover:text-[#4267B2] duration-200" />
                                </Link>
                                <Link to={"https://www.linkedin.com/in/mahmoud-medhat-84166a205"}>
                                    <FaLinkedin className="w-10 h-10 cursor-pointer hover:text-[#0077b5] duration-200" />
                                </Link>
                            </div>
                        </div>
                        {/* Links section */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pl-20 col-span-2 gap-6 max-lg:mt-10">
                            {
                                links.map((link) => (
                                    <div key={link.id}>
                                        <h1 className="font-bold text-[20px] mb-3">
                                            {
                                                link.header
                                            }
                                        </h1>
                                        <ul>
                                            {
                                                link.pages.map((link) => (
                                                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} key={link.id} to={link.link}>
                                                        <li className="mb-2">
                                                            <a className="hover:text-primary duration-200 cursor-pointer">
                                                                {
                                                                    link.name
                                                                }
                                                            </a>
                                                        </li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-t-2 lg:mt-20">
                    <div className="flex justify-center items-center py-8">
                        <p>@copyright {time} || <span className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">Mahmoud Medhat</span></p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;