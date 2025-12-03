import React from 'react'
import flagIcon from '../assets/images/ukflag.png'

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm font-bold underline underline-offset-18 decoration-[2px] !text-[red] decoration-premier-red">Personal</a>
            <div className="w-px h-3 bg-gray-300"></div>
            <a href="#" className="text-md font-bold">Institutional</a>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-md hover:text-gray-900 font-bold">WebTrader</a>
            <a href="#" className="text-md hover:text-gray-900 font-bold">Support</a>
            <a href="#" className="text-md hover:text-gray-900 font-bold">Open Demo</a>
            <div className="flex items-center gap-1.5">
              <div className="w-10 h-10 relative overflow-hidden rounded-sm">
                <img src={flagIcon} alt="flagIcon" className="w-full h-full object-cover" />
              </div>
              <span className="text-md font-bold">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2.5">
            <svg width="53" height="34" viewBox="0 0 53 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1411 2.04643C13.7749 0.831517 12.6558 0 11.3871 0C9.15456 0 5.60387 0 2.87634 0C1.96659 0 1.11034 0.430571 0.567595 1.16084C0.0251387 1.89112 -0.140244 2.8351 0.122355 3.70602C2.24875 10.7617 6.81361 25.909 8.47002 31.4061C8.83617 32.621 9.95531 33.4525 11.224 33.4525C13.4568 33.4525 17.0072 33.4525 19.7348 33.4525C20.6445 33.4525 21.5008 33.0219 22.0435 32.2917C22.5863 31.5614 22.7513 30.6174 22.4887 29.7462C20.3624 22.6908 15.7975 7.54319 14.1411 2.04643Z" fill="#ED1D25" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.637 2.04643C31.2709 0.831517 30.1521 0 28.8831 0C26.6505 0 23.0998 0 20.3723 0C19.4626 0 18.6063 0.430571 18.0636 1.16084C17.5211 1.89112 17.356 2.8351 17.6183 3.70602C19.3093 9.31725 22.4627 19.781 23.7927 24.1937C24.1586 25.4086 25.2777 26.2401 26.5464 26.2401C28.7792 26.2401 32.3296 26.2401 35.0572 26.2401C35.9672 26.2401 36.8232 25.8095 37.3659 25.0793C37.9087 24.349 38.0738 23.405 37.8112 22.5338C36.1202 16.9229 32.9667 6.45885 31.637 2.04643Z" fill="#ED1D25" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.2932 2.04643C48.9271 0.831517 47.8082 0 46.5392 0C44.3067 0 40.7563 0 38.0285 0C37.1187 0 36.2625 0.430571 35.72 1.16084C35.1773 1.89112 35.0122 2.8351 35.2748 3.70602C36.2932 7.08558 37.7604 11.9547 38.5818 14.68C38.9477 15.8949 40.0668 16.7261 41.3355 16.7261C43.5684 16.7261 47.1188 16.7261 49.8463 16.7261C50.7563 16.7261 51.6123 16.2958 52.155 15.5656C52.6978 14.8353 52.8629 13.8913 52.6003 13.0201C51.5818 9.64053 50.1144 4.77137 49.2932 2.04643Z" fill="#ED1D25" />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="font-black text-2xl tracking-tight lowercase">premier</span>
              <span className="font-black text-2xl tracking-tight lowercase">markets</span>
            </div>
          </div>

          {/* Center - Main navigation links */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-3">
              Trading
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-3">
              Discover
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-3">
              Promotions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center gap-3">
              Company
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Right side - Partner link, Register button, and icons */}
          <div className="flex items-center gap-6">
            {/* Partner with us link */}
            <a href="#" className="hidden lg:flex items-center gap-3 text-premier-red hover:text-premier-red-dark text-sm font-semibold">
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

