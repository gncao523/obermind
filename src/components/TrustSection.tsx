import React from 'react'

const TrustSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-['Gilroy'] font-bold mb-6 leading-[97%]">
                Join <span className="text-[red]">50,000+</span> traders who <br/> <span>trust us</span>
              </h2>
            </div>

            {/* Right side - Description and Buttons */}
            <div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 font-['UrbanistRegular'] leading-relaxed">
                Experience advanced trading tools, transparent and competitive pricing, lightning-fast execution, and dedicated support trusted by traders worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[red] text-white px-8 py-3.5 font-['Urbanist'] text-base hover:bg-[#C91A21] transition-colors shadow-lg rounded-full cursor-pointer">
                  Start Trading
                </button>
                <button className="bg-transparent text-[red] border-2 border-[red] px-8 py-3.5 font-['Urbanist'] text-base hover:bg-[red] hover:text-white transition-colors rounded-full cursor-pointer">
                  Try Demo Account
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Red Banner */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#FF1A1A] to-[#AD1D25] p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Person silhouette with Euro symbols */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Placeholder for person silhouette - user can add image here */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Person silhouette placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 bg-black/20 rounded-full blur-3xl"></div>
                </div>
                
                {/* Euro symbols scattered around */}
                <div className="absolute top-10 left-10 text-6xl sm:text-7xl lg:text-8xl text-orange-400/60 font-bold">€</div>
                <div className="absolute top-32 right-16 text-5xl sm:text-6xl lg:text-7xl text-orange-400/60 font-bold">€</div>
                <div className="absolute bottom-20 left-20 text-4xl sm:text-5xl lg:text-6xl text-orange-400/60 font-bold">€</div>
                <div className="absolute bottom-32 right-10 text-5xl sm:text-6xl lg:text-7xl text-orange-400/60 font-bold">€</div>
                <div className="absolute top-1/2 left-1/4 text-4xl sm:text-5xl lg:text-6xl text-orange-400/60 font-bold">€</div>
                
                {/* Person silhouette - placeholder circle with hand */}
                <div className="relative z-10">
                  <div className="w-32 h-40 sm:w-40 sm:h-52 lg:w-52 lg:h-64 bg-black/30 rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl sm:text-5xl lg:text-6xl">👤</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text and Button */}
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-['Gilroy'] font-bold mb-6 leading-tight">
                Everything you need to trade the markets
              </h3>
              <button className="bg-[#730307] text-white px-8 py-3.5 font-['Urbanist'] text-base hover:bg-[#900003] transition-colors rounded-full cursor-pointer shadow-[0_0_20px_rgba(255,0,0,0.5)] border-2 border-[#FF1A1A]/50">
                Explore Accounts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection

