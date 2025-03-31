import React from 'react'
import brandIdentity from "../images/brand-identity.svg"

function OurFocus() {
    return (

        <>
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-c-orange mb-6">
                            We focus on your goals.
                        </h2>
                        <p className="text-leap-gray leading-relaxed">
                            Impact begins with listening. We invest effort in learning about our client's vision, goals, and challenges. It's only through deep understanding that we create new experiences and connect people to them.
                        </p>
                    </div>
                </div>
            </section>


            <img src={brandIdentity}
                className='w-full'
                alt="" />
        </>
    )
}

export default OurFocus