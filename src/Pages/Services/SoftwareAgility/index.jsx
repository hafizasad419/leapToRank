import { Link } from "react-router-dom";
import softwareDevs from "../images/software-developers.svg"

function SoftwareAgility() {
    return (
        <>
            <section className="py-16 bg-white text-gray-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-c-orange">Software agility and lean.</h2>
                    <p className="max-w-3xl my-8">
                        We provide agile coaching to product teams, enabling our clients to deliver software faster and in smaller increments. We lead agile organizational agile transformations for larger clients. <br /> <br />
                        Agile's roots are in lean. Through value stream mapping, root cause problem solving, and other tools, we help clients improve flow and increase quality and efficiency.
                    </p>
                    <Link
                        to="/services/lean-agile"
                        className="btn-primary"
                    >
                        Learn More
                    </Link>
                </div>
            </section>
            <img src={softwareDevs}
                alt="software-developers"
                className="w-full"

            />



        </>
    )
}

export default SoftwareAgility