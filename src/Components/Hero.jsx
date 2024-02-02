import { useState } from "react";
import burger1 from "../../public/assets/burger1.png";
import burger2 from "../../public/assets/burger2.png";
import burger3 from "../../public/assets/burger3.png";
import { Link } from "react-router-dom";

const Hero = () => {

    const burgerPics = [
        {
            id: 1,
            name: "burger",
            link: burger1
        },
        {
            id: 2,
            name: "burger",
            link: burger2
        },
        {
            id: 3,
            name: "burger",
            link: burger3
        }
    ]

    const [imageUrl, setImageUrl] = useState("assets/burgerhome.png");

    const bgImage = {
        backgroundImage: `url(${"assets/vector.png"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    }

    return (
        <section style={bgImage} className="min-h-[700px] bg-gray-100">
            <div className="min-h-[700px] backdrop-blur-md flex justify-center items-center">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 lg:pt-0">
                        {/* Text Part */}
                        <div className="space-y-4 flex flex-col justify-center items-center md:items-start text-center md:text-start">
                            <h1 data-aos="zoom-out" className="text-5xl lg:text-[70px] lg:leading-[70px] font-bold">
                                Welcome to <span className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text">Burger</span> Restaurant
                            </h1>
                            <p data-aos="fade-up">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                            </p>
                            <Link to={"/Order"}>
                                <button data-aos="fade-up" className=" px-4 py-2 font-bold text-xl border-2 border-white rounded-full bg-gradient-to-r from-primary to-white hover:scale-105 duration-200">Order Now</button>
                            </Link>
                        </div>

                        {/* Image Part */}
                        <div className="min-h-[400px] flex justify-center items-center relative">
                            <div>
                                <img
                                    src={imageUrl}
                                    alt="burgerImage"
                                    className="max-w-[330px] lg:max-w-[450px] mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)] hover:scale-105 duration-200 cursor-pointer"
                                    data-aos="fade-left"
                                />
                            </div>
                            <div className="flex lg:flex-col absolute bottom-[-30px] lg:-right-20 lg:bottom-16 bg-white/30 rounded-full gap-5">
                                {
                                    burgerPics.map((burger) => (
                                        <div data-aos="zoom-out" key={burger.id}>
                                            <img
                                                src={burger.link}
                                                alt={`${burger.id} ${burger.name}`}
                                                className="max-w-[80px] h-[80px] object-contain hover:scale-105 duration-200 cursor-pointer"
                                                onClick={() => setImageUrl(
                                                    burger.id === 1 ? burger1 : burger.id === 2 ? burger2 : burger3
                                                )}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;