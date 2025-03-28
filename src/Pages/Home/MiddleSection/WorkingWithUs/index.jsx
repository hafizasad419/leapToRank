import { Link } from "react-router-dom"

const WorkingWithUs = () => {
    return (
        <section className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl font-bold">Working with us.</h2>
                <p className="max-w-3xl my-8">
                    We listen. When you work with us, you get personal attention and a partner.
                </p>
                <Link
                    to="/#go-contact"
                    className="btn-outline-gray"
                >
                    Get started
                </Link>
            </div>
        </section>
    )
}

export default WorkingWithUs

