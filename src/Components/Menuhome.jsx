import burger1 from "../../public/assets/burger1.png";
import burger2 from "../../public/assets/burger2.png";
import burger3 from "../../public/assets/burger3.png";
import Title from "./Title";

const Services = () => {

    const burgers = [
        {
            id: 1,
            name: "Beef Burger",
            link: burger1,
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
            aosDellay: "200"
        },
        {
            id: 2,
            name: "Jalapeño Burger",
            link: burger2,
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
            aosDellay: "400"
        },
        {
            id: 3,
            name: "Chicken Burger",
            link: burger3,
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
            aosDellay: "600"
        }
    ]


    return (
        <section className="bg-gray-100">
            <div className="py-12 lg:py-20">
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        {/* Menu */}
                        <Title
                            title={"Menu"}
                            description={" A Culinary Symphony of Flavorful Creations"}
                        />
                    </div>

                    {/* Menu Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-5">
                        {
                            burgers.map((burger) => (
                                <div key={burger.id}>
                                    <div data-aos="fade-up" data-aos-delay={burger.aosDellay} className="bg-white max-w-[300px] rounded-[20px] shadow-lg mx-auto hover:bg-primary duration-300 hover:cursor-pointer group">
                                        <div className="h-[150px]">
                                            <img
                                                src={burger.link}
                                                alt={burger.name}
                                                className="max-w-[200px] h-[200px] object-contain -translate-y-16 mx-auto group-hover:scale-105 duration-300"
                                            />
                                        </div>

                                        <div className="text-center p-4">
                                            <h1 className="font-bold text-[25px] group-hover:text-white">
                                                {burger.name}
                                            </h1>
                                            <p className="text-gray-500 text-sm group-hover:text-white">
                                                {burger.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;