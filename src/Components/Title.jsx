const Title = ({ title, description }) => {
    return (
        <div>
            <div className="text-center max-w-[400px] mb-20">
                <h1 data-aos="fade-up" className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl md:text-[50px] font-bold pb-5 leading-[60px]">
                    {title}
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-md lg:text-xl">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Title;