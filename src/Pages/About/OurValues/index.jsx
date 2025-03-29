import React from 'react'
import TickerLoop from '../../../Components/TickerLoop'
import { ourValues } from './ourValues'
import hill from "../images/hill.svg"



function OurValues() {
    return (
        <>
            <section className="py-16 md:py-24 bg-white text-gray-700">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl text-c-orange md:text-5xl font-bold mb-6">
                            Our values.
                        </h2>
                        <p className="leading-relaxed">
                            Our mission describes why we exist. Our values detail how we behave. They inform our every action. They're both our character and the blueprint for achieving our mission.
                        </p>
                    </div>
                </div>
            </section>

            <TickerLoop
                cards={ourValues}
            />

            <img
            className='absolute'
            src={hill} alt="" />

        </>
    )
}

export default OurValues