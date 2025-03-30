import maintenance from "./maintenance.svg"
import bg from "../BrandIdentity/bg.svg"

function DigitalMarketing() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-3/5 pr-0 md:pr-8">
          <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Digital marketing.</h2>
          <p className="leading-relaxed mb-10">
          We help you build relationships with your customers by creating interactive, multi-channel experiences which match your brand and engage your audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <div>
              <p className="font-medium mb-3">Search engine optimization</p>
              <p className="font-medium mb-3">Email design and campaigns</p>
            </div>
            <div>
              <p className="font-medium mb-3">Social media pages</p>
              <p className="font-medium mb-3">Social media training</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 mt-10 md:mt-0 relative">
          <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
          <img src={maintenance || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default DigitalMarketing