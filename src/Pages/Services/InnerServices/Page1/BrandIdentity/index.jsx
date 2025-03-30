import items from "./brand-identity-animated.svg"
import bg from "./bg.svg"

function BrandIdentity() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Brand identity.</h2>
            <p className="leading-relaxed mb-10">
              Whether introducing a new product or re-imagining your company, we'll help you create a brand identity
              which reflects your personality and tells your story. From small to large, we design brands that scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="font-medium mb-3">Brand identity</p>
                <p className="font-medium mb-3">Brand style guides</p>
                <p className="font-medium mb-3">Brand names and slogans</p>
              </div>
              <div>
                <p className="font-medium mb-3">Logo design and typography</p>
                <p className="font-medium mb-3">Brand voice and tone</p>
                <p className="font-medium mb-3">Digital and print media</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 mt-10 md:mt-0 relative">
            <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
            <img src={items || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandIdentity