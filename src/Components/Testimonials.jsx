import Slider from "react-slick";
import Title from "./Title";
import personOne from "../../public/assets/person1.jpg";
import personTwo from "../../public/assets/person2.jpg";
import personThree from "../../public/assets/person3.jpg";

const Testimonials = () => {

  const peopleInfo = [
    {
      id: 1,
      img: personOne,
      description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      name: "Mahmoud"
    },
    {
      id: 2,
      img: personTwo,
      description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      name: "Ahmed"
    },
    {
      id: 3,
      img: personThree,
      description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      name: "Mohammed"
    }
  ]

  const settings = {
    dots: false,
    arrows: false,
    autoplayspeed: 3000,
    autoplay: true,
    useCSS: "linear",
    infinite: true,
    loop: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    mobileFirst: true
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          {/* Header section */}
          <Title
            title={"What our customers say"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt"}
          />
          {/* Slider section */}
          <div className="max-w-[300px] lg:max-w-[600px] mx-auto">
            <Slider {...settings}>
              {
                peopleInfo.map((people) => (
                  <div key={people.id}>
                    <div data-aos="fade-up" className="bg-white shadow-lg p-4 text-center space-y-3 my-8 mx-5">
                      <img
                        src={people.img}
                        alt={people.name}
                        className="w-20 h-20 rounded-full mx-auto block"
                      />
                      <p className="text-gray-500">
                        {
                          people.description
                        }
                      </p>
                      <h1 className="font-bold text-[20px]">
                        {
                          people.name
                        }
                      </h1>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;