import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { Link } from "react-router-dom";


const Discount = () => {

    return (
        <section>
            <div className="container">
                <div className="flex justify-between items-center gap-6 py-10 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                        {/* Image section */}
                        <div data-aos="flip-up">
                            <img
                                src="assets/burger5.png"
                                alt="burger5Image"
                                className="max-w-[300px] lg:max-w-[500px] mx-auto object-contain drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                            />
                        </div>
                        {/* Text section */}
                        <div className="space-y-6">
                            <h1 data-aos="fade-up" className="font-bold text-5xl">
                                Buy 2 get 1 free
                            </h1>
                            <p data-aos="fade-up" className="text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
                            </p>
                            <div className="flex gap-6">
                                <div data-aos="fade-up">
                                    <GrSecure  className="bg-violet-100 w-[80px] h-[80px] p-4 rounded-full shadow-sm" />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <IoFastFood className="bg-pink-200 w-[80px] h-[80px] p-4 rounded-full shadow-sm" />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400">
                                    <GiFoodTruck className="bg-blue-100 w-[80px] h-[80px] p-4 rounded-full shadow-sm" />
                                </div>
                            </div>
                            <div>
                                <Link to={"/Order"}>
                                    <button data-aos="fade-up" data-aos-delay="600" className="text-white bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-full hover:scale-105 duration-200">
                                        Order Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discount;