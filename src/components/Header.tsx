import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      {/* Top bar with Personal/Institutional */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          {/* Left side - Personal/Institutional */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-xs text-premier-red font-medium underline">Personal</a>
            <div className="w-px h-3 bg-gray-300"></div>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-medium">Institutional</a>
          </div>

          {/* Right side - WebTrader, Support, Open Demo, Language */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-medium">WebTrader</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-medium">Support</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-medium">Open Demo</a>
            {/* UAE Flag Icon */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-3.5 relative overflow-hidden rounded-sm border border-gray-200 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-white to-red-500"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black"></div>
              </div>
              <span className="text-xs text-gray-700 font-medium">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2.5">
            {/* Logo - Red M/W shape */}
            <div className="w-9 h-9 bg-premier-red rounded-md flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4v16h4v-8l4 5 4-5v8h4V4h-4v6l-2 2.5L10 10V4H4z"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-premier-red font-bold text-xl tracking-tight lowercase">premier</span>
              <span className="text-black font-bold text-xl tracking-tight lowercase">markets</span>
            </div>
          </div>

          {/* Center - Main navigation links */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-1.5">
              Trading
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-1.5">
              Discover
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-1.5">
              Promotions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-1.5">
              Company
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Right side - Partner link, Register button, and icons */}
          <div className="flex items-center gap-6">
            {/* Partner with us link */}
            <a href="#" className="hidden lg:flex items-center gap-1.5 text-premier-red hover:text-premier-red-dark text-sm font-semibold">
              Partner with us
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Register button */}
            <button className="bg-premier-red text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-premier-red-dark transition-colors shadow-sm">
              Register
            </button>

            {/* Two circular icons - red and light pink */}
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 bg-premier-red rounded-full flex items-center justify-center text-white hover:bg-premier-red-dark transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="w-9 h-9 bg-pink-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

