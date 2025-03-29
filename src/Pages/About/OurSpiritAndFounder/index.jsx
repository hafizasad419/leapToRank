import slope from '../images/slope.svg';

function OurSpiritAndFounder() {
    return (
        <div className='bg-c-sky-blue'>
            <section className="py-16 lg:py-40 bg-c-sky-blue">
                <div className="container mx-auto px-4">
                    {/* Our Spirit Section */}
                    <div className="max-w-4xl mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-c-orange mb-6">
                            Our spirit.
                        </h2>
                        <p className="text-leap-gray leading-relaxed">
                            We create brand experiences that delight. We do that by bringing passion to energy to every project. It's in our DNA. We love our work.
                        </p>
                    </div>

                    {/* Our Founder Section */}
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-c-orange mb-6">
                            Our founder.
                        </h2>
                        <p className="text-leap-gray leading-relaxed">
                            LEAP TO RANK was founded by Mark Plutynski. He's a designer, technology professional, and business problem solver.
                        </p>
                        <p className="text-leap-gray leading-relaxed mt-4">
                            Mark led lean management. Small teams of 3-5 people on location projects across California in his last successful business.
                            Mark is an experienced problem solver.
                            Relieve your business marketing pain by handing the reigns over to to a small, focussed team, driven by your success.
                            Though LEAP TO RANK, he extends his capabilities to help companies apply design as a lever to close performance gaps and achieve growth targets.
                        </p>
                    </div>
                </div>


            </section>
            <img 
            className='w-full'
            src={slope} alt="" />
        </div>
    );
}

export default OurSpiritAndFounder;
