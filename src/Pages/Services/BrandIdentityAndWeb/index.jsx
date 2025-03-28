import { Link } from "react-router-dom";
import agileStandup from "../images/agile-stand-up.svg"



export default function BrandIdentityAndWeb() {
    return (
        <>
            <section className="py-16 bg-white text-gray-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-c-orange">Brand identity and web.</h2>
                    <p className="max-w-3xl my-8">
                        We create brand experiences that capture attention and imagination, while staying true to our client's vision. We design intuitive user experiences and responsive websites which work on all screen sizes.
                    </p>
                    <Link
                        to="/services/brand-identity"
                        className="btn-primary"
                    >
                        Learn More
                    </Link>
                </div>
            </section>
            <img src={agileStandup} 
            alt="agile-standup"
            className="w-full"
            
            />



        </>
    )
}
