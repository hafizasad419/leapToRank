import React from 'react'
import { Link } from 'react-router-dom'

function InnovationCapital() {
    return (
        <>
            <section className="py-16 bg-white text-gray-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-c-orange">Innovation capital.</h2>
                    <p className="max-w-3xl my-8">
                        We create sustainable innovation programs. Using design thinking and a venture capital mindset, we empower mid to large-sized clients to capitalize on internal talent and give life to new products.
                    </p>
                    <Link
                        to="/services/innovation"
                        className="btn-primary"
                    >
                        Learn More
                    </Link>
                </div>
            </section>

        </>
    )
}

export default InnovationCapital