import { Link } from "react-router-dom";

const Stores = () => {
    return (
        <section className="bg-gray-100">
            <div className="container">
                <div className="flex flex-col justify-center items-center py-10 lg:py-20">
                    <h1 data-aos="zoom-in" className="text-xl md:text-3xl lg:text-4xl text-gray-700 font-bold max-w-xl text-center">Burger Restaurant is available for Android and IOS</h1>
                    <div className="flex mt-5">
                        <Link to={"https://play.google.com/store/apps"}>
                            <img data-aos="fade-up" src="assets/play_store.png" alt="playstoreImg" className="w-56" />
                        </Link>
                        <Link to={"https://www.apple.com/store"}>
                            <img data-aos="fade-up" data-aos-delay="300" src="assets/app_store.png" alt="applesto000reImg" className="w-56" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stores;