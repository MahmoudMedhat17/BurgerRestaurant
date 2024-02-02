import burger1 from "../../public/assets/burger1.png";
import Ordermenuitems from "./Ordermenuitems";

const Ordernow = () => {

    return (
        <section className="my-20">
            <Ordermenuitems />
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <h1 data-aos="fade-up" className="text-[20px] lg:text-[40px] bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Order Now!</h1>
                    <form data-aos="fade-up" data-aos-delay="200" className="min-h-[400px] w-full rounded-md shadow-xl flex flex-col md:flex-row justify-between items-center bg-secondary">
                        {/* Inputs of the form */}
                        <div className="lg:w-[400px]">
                            <div className="flex flex-col p-7">
                                <label className="pb-2 text-[20px]" htmlFor="fName">Your name</label>
                                <input
                                    id="fName"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="outline-primary w-full rounded-md placeholder:px-2"
                                />
                            </div>
                            <div className="flex flex-col p-7">
                                <label className="pb-2 text-[20px]" htmlFor="address">Your Address</label>
                                <input
                                    id="addres"
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="outline-primary w-full rounded-md  placeholder:px-2"
                                />
                            </div>
                            <div className="flex flex-col p-7">
                                <label className="pb-2 text-[20px]" htmlFor="phoneNo">Your phone number</label>
                                <input
                                    id="phoneNo"
                                    type="text"
                                    placeholder="Enter Your Phone No."
                                    className="outline-primary w-full rounded-md  placeholder:px-2"
                                />
                            </div>
                            <div className="flex flex-col p-7">
                                <label className="pb-2 text-[20px]" htmlFor="options">Your Choice</label>
                                <textarea
                                    id="options"
                                    type="text"
                                    placeholder="Enter Your prefered options"
                                    rows={6}
                                    cols={6}
                                    className="outline-primary w-full rounded-md resize-none  placeholder:px-2"
                                />
                            </div>
                        </div>
                        {/* Image in the form */}
                        <div>
                            <img
                                src={burger1}
                                alt="burger1"
                                className="w-[300px] lg:w-[400px] drop-shadow-[5px_10px_7px_rgba(0,0,0,1)]"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Ordernow;