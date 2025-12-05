import React from 'react'
import sectionBg from '../assets/images/ctabanner.png'
import register from '../assets/images/register.png'
import fund from '../assets/images/fund.png'
import start from '../assets/images/start.png'

const GetStartedSection: React.FC = () => {
    return (
        <section className="relative max-w-6xl mx-auto my-8 py-12 px-8 overflow-hidden rounded-3xl">
            <img src={sectionBg} alt="get started" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 w-full">
                <div className="relative z-10 flex items-center justify-start gap-4">
                    <img src={register} alt="register" className="object-cover h-24" />
                    <img src={fund} alt="fund" className="object-cover h-24" />
                    <img src={start} alt="start" className="object-cover h-24" />
                </div>
                <p className="text-white text-base font-['UrbanistRegular'] pl-6 mb-6">
                    Ready to trade smarter? Get instant access to global markets with reliable tools and 24/5 support.
                    </p>
                    <button className="bg-white text-[#FC1B1B] px-8 py-3 rounded-full font-['Urbanist'] text-base font-bold hover:bg-gray-50 transition-colors shadow-lg ml-6 cursor-pointer">
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default GetStartedSection

