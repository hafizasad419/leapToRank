import items2 from "./setting-playing.svg"
import bg from "./bg.svg"

export default function AgileCoaching() {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">Agile coaching.</h2>
            <p className="leading-relaxed mb-10">
              We embed with software development teams to increase agility and accelerate the rate at which they deliver working software to users. By breaking traditional waterfall projects into smaller components, customers capture value sooner and developers assume less risk when releasing software.
              <br /> <br />
              We facilitate agile ceremonies and train teams. We connect development teams to their users. In combination with more frequent releases, we enable development teams capture equally frequent feedback and respond more quickly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="font-medium mb-3">Scrum teams</p>
                <p className="font-medium mb-3">Kanban teams</p>
              </div>
              <div>
                <p className="font-medium mb-3">Logo design and typography</p>
                <p className="font-medium mb-3">CI/CD tech stacks</p>

              </div>
            </div>
          </div>

          <div className="md:w-2/5 mt-10 md:mt-0 relative">
            <img src={bg} alt="" className="w-full h-full absolute top-0 left-12" aria-hidden="true" />
            <img src={items2 || "/placeholder.svg"} alt="Brand identity illustration" className="w-full relative z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
