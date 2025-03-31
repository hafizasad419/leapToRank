import maintenance2 from "./maintenance2.svg"
import bg from "../AgileCoaching/bg.svg"


export default function ValueStreamMapping() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-3/5 pr-0 md:pr-8">
          <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Value stream mapping.</h2>
          <p className="leading-relaxed mb-10">
          We facilitate value steam mapping workshops to speed up the delivery of value to the customer, increase quality, and ease pain experienced by the people who do the work. We help companies find and eliminate waste and help them root cause problem solve discovered opportunities.
          </p>
        </div>

        <div className="md:w-2/5 mt-10 md:mt-0 relative">
          <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
          <img src={maintenance2 || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
        </div>
      </div>
    </div>
  </section>
  )
}
