import bg from '../images/collaboration.svg';

function ServicesHero() {
    return (
        <section
            className="pt-24 pb-10 lg:pt-36 md:pb-20 bg-cover bg-center text-white relative bg-img-shadow min-h-[50vh] lg:min-h-[90vh]"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {/* Hero Section of Services Page */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                        Creating a way forward.
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default ServicesHero