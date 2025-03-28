import spheresBg from './spheres-bg.svg';

const ResultOriented = () => {
    return (
        <section className="relative bg-leap-navy text-white overflow-hidden">
            {/* Curved effect at the top */}
            <div className="absolute top-0 left-0 w-full z-20">
                <svg width="100%" viewBox="0 0 1000 64" fill="#ffffff">

                    <g transform="translate(0 0)" fill="">

                        <path d="M0 0 L250 60 L1000 0 L1000 0 L0 0"></path>

                    </g>
                </svg>
            </div>

            {/* Full-width Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-10 bg-img-shadow"
                style={{ backgroundImage: `url(${spheresBg})` }}
            ></div>

            {/* Content Section */}
            <div className="container mx-auto px-4 relative z-30 py-16 lg:py-32">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Results oriented.
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed">
                            LEAP TO RANK is more than a branding agency. A company's outward personality reflects its internal culture.
                            We lead culture change and enable clients to maximize the value they deliver to their customers.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Success is rooted in behavior and a continuous improvement mindset. Whether transforming the customer
                            experience or transforming how teams and organizations work — increasing agility and bringing life to
                            innovative product ideas — that's where we shine. We deliver impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultOriented;
