import burgerAbout from "../../public/assets/burgerAbout.jpg";

const Aboutpage = () => {
    return (
        <section>
            <div className="container min-h-[600px] flex justify-center items-center">
                <div className="flex flex-col items-center space-y-5 my-10">
                    <h1 data-aos="fade-up" className="text-[40px] lg:text-[60px] font-bold max-w-[800px] text-center">WELCOME TO BEST <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">BURGER</span> Restaurant</h1>
                    <div className="flex flex-col space-y-5">
                        <p data-aos="fade-up" data-aos-delay="200" className="text-[20px] lg:text-[25px] text-gray-500 leading-10 lg:leading-[50px] text-start">
                            Welcome to <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Burger Restaurant</span> where the art of crafting burgers meets a symphony of flavors that tantalize your taste buds. Nestled in the heart of the bustling city, our burger restaurant is a culinary haven for those seeking an unforgettable dining experience.

                            Upon stepping through the inviting entrance, the tantalizing aroma of sizzling patties and freshly baked buns welcomes you to a world of gastronomic delight. The interior boasts a contemporary yet cozy ambiance, with warm lighting, rustic wooden accents, and vibrant artwork that reflects the dynamic spirit of our menu.

                            At <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Burger Restaurant</span>, we take pride in our commitment to using only the finest, high-quality ingredients. Our chefs meticulously source locally produced, organic vegetables and top-grade, grass-fed beef to ensure each burger is a masterpiece of flavor and freshness. Whether you are a meat enthusiast or a devoted vegetarian, our diverse menu offers a mouthwatering array of options to suit every palate.

                            The star of our show is, of course, the burger. Handcrafted with love and precision, our patties are grilled to perfection, resulting in a juicy and flavorful bite every time. Choose from a variety of artisanal buns, including classic sesame, brioche, or even gluten-free options. Customize your burger with an array of toppings, from crispy bacon and melted cheeses to farm-fresh lettuce and tomatoes, creating a personalized masterpiece that caters to your unique taste preferences.

                            Not just content with burgers, our menu extends to a range of delectable sides, such as golden shoestring fries, crispy onion rings, and zesty coleslaw. To complement your meal, we offer a curated selection of craft beers, signature shakes, and handcrafted sodas, each chosen to enhance the overall dining experience.

                            At Sizzling Stackhouse, we prioritize not only the quality of our food but also the satisfaction of our guests. Our attentive and friendly staff are dedicated to providing exceptional service, ensuring your visit is nothing short of delightful.

                            Whether you are stopping by for a quick lunch, a casual dinner, or a celebratory gathering with friends, <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Burger Restaurant</span> invites you to savor the flavors, embrace the ambiance, and indulge in the joy of a truly remarkable burger experience.
                        </p>
                        <img
                            src={burgerAbout}
                            alt="burgerAbout"
                            className="rounded-md"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutpage;