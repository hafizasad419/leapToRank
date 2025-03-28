import { Link } from "react-router-dom";
import { services } from "./services";
import backgroundImage from "./field-bunny.svg"; 

const ServicesSection = () => {
    return (
        <section className="relative py-16 lg:py-24 text-white overflow-hidden">
            {/* Background Image - Fixed and Contained */}
            <div 
                className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-c-green opacity-80"></div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-12">
                    Our services.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <p className="mb-6 flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-auto">
                                <Link
                                    to={service.link}
                                    className="inline-block border border-white text-white py-4 px-8 rounded text-sm hover:bg-white hover:text-c-green transition duration-200 italic font-bold"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
