import bg from "../images/reaching-higher.svg";
import "./AboutHero.css"; 

export default function AboutHero() {
    return (
        <section
            className="about-hero pt-24 pb-10 lg:pt-36 md:pb-20 text-white relative bg-img-shadow"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                        Our purpose inspires us to reach higher.
                    </h1>
                </div>
            </div>
        </section>
    );
}
