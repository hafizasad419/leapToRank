import heroBg from './bridge.svg';
import { Link as ScrollLink } from "react-scroll";

const HeroSection = ({ }) => {
    return (
        <section
            className="pt-24 pb-10 lg:pt-36 md:pb-20 bg-cover bg-center text-white relative bg-img-shadow"
            style={{
                backgroundImage: `url(${heroBg})`,
                minHeight: '90vh'
            }}
        >
            {/* <div
        className="absolute top-0 left-0 w-full h-full bg-leap-dark bg-opacity-40 z-0"
        aria-hidden="true"
      ></div> */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                        Attract new customers and delight existing ones.
                    </h1>
                    <ScrollLink
                        to="middle-section"
                        smooth={true}
                        duration={1500}
                    >
                        <div className="mouse-icon !mt-12">
                            <span className="mouse-dot"></span>
                        </div>
                    </ScrollLink>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
