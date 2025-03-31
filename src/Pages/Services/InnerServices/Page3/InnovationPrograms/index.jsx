import items3 from "./two-person-on-chairs.svg"
import bg from "./bg.svg"

export default function InnovationPrograms() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Innovation programs.</h2>
            <p className="leading-relaxed mb-10">
              All companies must innovate to remain competitive, excel in their vertical or enter a new one. Whether pursuing sustaining or disruptive innovation, a culture of innovation is a requirement of all companies wanting to bring new products or product features to market.
              <br /> <br />
              We partner with our clients to create software innovation programs, so they can build a steady pipeline of new opportunities, capitalize on employee ingenuity, and protect time and money for investment in ideas that have merit.
            </p>

          </div>

          <div className="md:w-2/5 mt-10 md:mt-0 relative">
            <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
            <img src={items3 || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
