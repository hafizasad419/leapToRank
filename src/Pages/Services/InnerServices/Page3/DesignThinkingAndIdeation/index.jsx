import wireframe2 from "./sitiing-sofa.svg"
import bg from "../InnovationPrograms/bg.svg"



export default function DesignThinkingAndIdeation() {
    return (

        <section className="py-16 md:py-24 bg-white text-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row-reverse justify-between">
                    <div className="md:w-3/5 pr-0 md:pl-16">
                        <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Design thinking and ideation.</h2>

                        <p className="leading-relaxed mb-10">
                            Design thinking is a human-centered approach to solving challenges. We facilitate workshops and train clients on the use of tools that produce generative outputs and positive business outcomes. Purposeful innovation lives at the intersection of desirability, feasibility, and viability.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                            <div>
                                <p className="font-medium mb-3">Workshops</p>
                            </div>
                            <div>
                                <p className="font-medium mb-3">Coaching and training</p>

                            </div>
                        </div>

                    </div>

                    <div className="md:w-2/5 mt-10 md:mt-0 relative">
                        <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
                        <img src={wireframe2 || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}

