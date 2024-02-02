import burgerSelection from "../../public/assets/burgerselection.png";
import burgerService from "../../public/assets/burgerservice.png";
import fastService from "../../public/assets/fastservice.png";
import dineInOut from "../../public/assets/dineInOut.png";
import driveThru from "../../public/assets/driveThru.png";
import onlineOrder from "../../public/assets/onlineOrder.png";
import delivery from "../../public/assets/delivery.png";

const Servicespage = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col justify-center items-center space-y-24 my-10">
                    {/* Title */}
                    <div data-aos="fade-up">
                        <h1 className="text-[50px] lg:text-[70px] font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Our Services</h1>
                    </div>
                    {/* Menu Selection */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-0 items-center">
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Menu Selection</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500"> We offer a variety of burger options with different types of patties (beef, chicken, veggie), toppings, and sauces.</p>
                        </div>
                        <img
                            src={burgerSelection}
                            alt="burger"
                            className="max-w-[400px] drop-shadow-[6px_5px_10px_rgba(0,0,0,1)]"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        />
                    </div>
                    {/* Customization */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-0 items-center">
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Customization</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500">We allow the customers to customize their burgers by choosing specific toppings, condiments, and sides according to their preferences.</p>
                        </div>
                        <img
                            src={burgerService}
                            alt="burgerService"
                            className="max-w-[400px] drop-shadow-[6px_5px_10px_rgba(0,0,0,1)]"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                    {/* Fast Service */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-0 items-center">
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Fast Service</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500"> Quick preparation and service to cater to customers looking for a fast and convenient dining experience.</p>
                        </div>
                        <img
                            src={fastService}
                            alt="fastserivce"
                            className="max-w-[300px] lg:max-w-[400px] lg:ml-4"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                    {/* Dine-In and Take-Out */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-10 items-center">
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Dine-In and Take-Out</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500">Providing options for customers to either enjoy their meal in the restaurant or take it to-go.</p>
                        </div>
                        <img
                            src={dineInOut}
                            alt="dineInOut"
                            className="max-w-[300px] lg:max-w-[400px] lg:ml-4"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                    {/* Drive thru */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-10 items-center">
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Drive-Thru</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500">We offer drive-thru services for customers who prefer the convenience of ordering from their vehicles.</p>
                        </div>
                        <img
                            src={driveThru}
                            alt="driveThru"
                            className="max-w-[400px]"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                    {/* online ordering */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-10 items-center w-full justify-between">
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Online Ordering</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500">We accept orders through online platforms or apps for both pickup and delivery.</p>
                        </div>
                        <img
                            src={onlineOrder}
                            alt="onlineOrder"
                            className="max-w-[400px]"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                    {/* Delivery Services */}
                    <div className="flex flex-col gap-7 lg:flex-row lg:gap-10 items-center w-full justify-between">
                        <div data-aos="fade-up">
                            <h1 className="font-bold text-[40px] lg:text-[50px]">Delivery Services</h1>
                            <p className="text-[20px] lg:text-[25px] text-gray-500">We have delivery options through third-party services or an in-house delivery team.</p>
                        </div>
                        <img
                            src={delivery}
                            alt="delivery"
                            className="max-w-[400px]"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicespage;