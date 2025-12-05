import React from 'react'
import withdrawImage from '../assets/images/wd.png'
import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'

const WithdrawSection: React.FC = () => {
    return (
        <section className="py-20 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm lg:text-base text-[#FC1B1B] mb-2 font-['Urbanist']">
                        Access your funds anytime, anywhere.
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-['Gilroy'] text-black mb-4">
                        Seamless Withdrawals
                    </h2>
                </div>

                <div className="relative w-full flex items-center justify-between">
                    <div className="relative w-full rounded-3xl" >
                        <img src={withdrawImage} alt="withdraw" className="absolute rounded-3xl top-0 left-0 w-full h-full object-cover z-0" />
                        <div className="relative z-10 px-2 sm:px-24 py-2 sm:py-16">
                            <div className="w-full sm:w-[35%] flex gap-4 my-6 cursor-pointer hover:bg-white rounded-2xl p-4">
                                <img src={w1} alt="withdraw" className="w-12 h-12 object-cover" />
                                <div>
                                    <h3 className="text-xl font-['Gilroy'] text-[#151515]">
                                        Ultra-Fast Processing
                                    </h3>
                                    <p className="text-sm font-['UrbanistRegular'] text-[#151515]">
                                        Over 99% of withdrawals processed <br/> within 24 hours, based on verified 2025 <br/> internal performance data.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[35%] flex gap-4 my-6 cursor-pointer hover:bg-white rounded-2xl p-4">
                                <img src={w2} alt="withdraw" className="w-12 h-12 object-cover" />
                                <div>
                                    <h3 className="text-xl font-['Gilroy'] text-[#151515]">
                                    Secure & Transparent
                                    </h3>
                                    <p className="text-sm font-['UrbanistRegular'] text-[#151515]">
                                        Tier 1 banking and custody <br/> partners keep your funds<br/> protected at every stage.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-[35%] flex gap-4 my-6 cursor-pointer hover:bg-white rounded-2xl p-4">
                                <img src={w3} alt="withdraw" className="w-12 h-12 object-cover" />
                                <div>
                                    <h3 className="text-xl font-['Gilroy'] text-[#151515]">
                                        Effortless Access
                                    </h3>
                                    <p className="text-sm font-['UrbanistRegular'] text-[#151515]">
                                        Enjoy quick withdrawals with no<br/> hidden fees and a smooth,<br/> seamless process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WithdrawSection

