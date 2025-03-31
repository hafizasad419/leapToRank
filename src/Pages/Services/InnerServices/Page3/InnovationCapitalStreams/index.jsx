import maintenance3 from "./maintenance3.svg"
import bg from "../InnovationPrograms/bg.svg"


export default function InnovationCapitalStreams() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Innovation capital streams.</h2>
            <p className="leading-relaxed mb-2">
              All organizations exist in one of two categories: tech companies and companies which use technology. Most companies reside in the latter category under persistent disruptive threat from tech companies — able to leverage experience gained in their primary vertical to enter or erode another.
            </p>
            <p className="leading-relaxed mb-10">
              We help traditional companies think and behave more like tech companies. Amazon AWS, Microsoft Azure, and other products provide equal technological scale to companies of all sizes. Large companies and the enterprise have a single advantage over smaller, more nimble competitors. They have more employees. Disruptive innovation is subject to power law distribution. More employees can produce more ideas. Companies able to capitalize on their internal talent are more likely to succeed.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="font-medium mb-3">Define go-to-market strategy</p>
                <p className="font-medium mb-3">Find product/market fit</p>
              </div>
              <div>
                <p className="font-medium mb-3">Identify monetization strategies</p>
                <p className="font-medium mb-3">Coach leaders and product teams</p>

              </div>
            </div>

          </div>

          <div className="md:w-2/5 mt-10 md:mt-0 relative">
            <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
            <img src={maintenance3 || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
