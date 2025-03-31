import wireframe2 from "./man-woman-whiteboard.svg"
import bg from "../AgileCoaching/bg.svg"



export default function AgileTransformation() {
    return (

        <section className="py-16 md:py-24 bg-white text-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row-reverse justify-between">
                    <div className="md:w-3/5 pr-0 md:pl-16">
                        <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Agile transformation.</h2>
                        <p className="leading-relaxed mb-4">
                        Agile is about more than ceremonies and tools. It requires new roles, organizational structures, and team composition. Teams need to change how they work. Leaders need to develop new skills and a new understanding of what it means to be a leader. At its core, and agile transformation is about changing the organizational culture.
                        </p>
                        <p className="leading-relaxed mb-10">
                        We transform organizational culture. We increase honesty and openness, institute feedback loops, and create a learning environment that promotes learning without fear. We build trust and develop skills in executives, leaders, and individual contributors.
                        </p>

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

