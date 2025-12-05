import React from 'react'
import paypal from '../assets/images/paypal.png'
import mastercard from '../assets/images/mastercard.png'
import skrill from '../assets/images/Skrill.png'
import applepay from '../assets/images/pay.png'
import visa from '../assets/images/Visa.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'
import youtube from '../assets/images/youtube.png'
import twitter from '../assets/images/twitter.png'

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black text-white">
            {/* Payment Methods Section */}
            <div className="border-b border-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                        {/* PayPal */}
                        <div className="text-white text-sm font-semibold">
                            <img src={paypal} alt="paypal" className="w-24 h-6 object-cover" />
                        </div>

                        {/* MasterCard */}
                        <div className="flex items-center gap-1">
                            <img src={mastercard} alt="mastercard" className="w-15 h-9 object-cover" />
                        </div>

                        {/* Skrill */}
                        <div className="text-white text-sm font-semibold">
                            <img src={skrill} alt="skrill" className="w-18 h-6 object-cover" />
                        </div>

                        {/* Apple Pay */}
                        <div className="text-white text-sm font-semibold">
                            <img src={applepay} alt="applepay" className="w-16 h-6 object-cover" />
                        </div>

                        {/* VISA */}
                        <div className="text-white text-sm font-semibold">
                            <img src={visa} alt="visa" className="w-16 h-5 object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left Side */}
                    <div>
                        <div className="flex items-center gap-2 sm:gap-2.5">
                            <svg className="w-10 h-6 sm:w-12 sm:h-8 md:w-[53px] md:h-[34px]" viewBox="0 0 53 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.1411 2.04643C13.7749 0.831517 12.6558 0 11.3871 0C9.15456 0 5.60387 0 2.87634 0C1.96659 0 1.11034 0.430571 0.567595 1.16084C0.0251387 1.89112 -0.140244 2.8351 0.122355 3.70602C2.24875 10.7617 6.81361 25.909 8.47002 31.4061C8.83617 32.621 9.95531 33.4525 11.224 33.4525C13.4568 33.4525 17.0072 33.4525 19.7348 33.4525C20.6445 33.4525 21.5008 33.0219 22.0435 32.2917C22.5863 31.5614 22.7513 30.6174 22.4887 29.7462C20.3624 22.6908 15.7975 7.54319 14.1411 2.04643Z" fill="#ED1D25" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.637 2.04643C31.2709 0.831517 30.1521 0 28.8831 0C26.6505 0 23.0998 0 20.3723 0C19.4626 0 18.6063 0.430571 18.0636 1.16084C17.5211 1.89112 17.356 2.8351 17.6183 3.70602C19.3093 9.31725 22.4627 19.781 23.7927 24.1937C24.1586 25.4086 25.2777 26.2401 26.5464 26.2401C28.7792 26.2401 32.3296 26.2401 35.0572 26.2401C35.9672 26.2401 36.8232 25.8095 37.3659 25.0793C37.9087 24.349 38.0738 23.405 37.8112 22.5338C36.1202 16.9229 32.9667 6.45885 31.637 2.04643Z" fill="#ED1D25" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M49.2932 2.04643C48.9271 0.831517 47.8082 0 46.5392 0C44.3067 0 40.7563 0 38.0285 0C37.1187 0 36.2625 0.430571 35.72 1.16084C35.1773 1.89112 35.0122 2.8351 35.2748 3.70602C36.2932 7.08558 37.7604 11.9547 38.5818 14.68C38.9477 15.8949 40.0668 16.7261 41.3355 16.7261C43.5684 16.7261 47.1188 16.7261 49.8463 16.7261C50.7563 16.7261 51.6123 16.2958 52.155 15.5656C52.6978 14.8353 52.8629 13.8913 52.6003 13.0201C51.5818 9.64053 50.1144 4.77137 49.2932 2.04643Z" fill="#ED1D25" />
                            </svg>

                            <div className="flex flex-col leading-tight font-['Urbanist']">
                                <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight lowercase">premier</span>
                                <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight lowercase">markets</span>
                            </div>
                        </div>

                        {/* CFD Disclaimer */}
                        <p className="text-sm text-[#FFFFFF99] my-6 font-['UrbanistRegular'] leading-relaxed">
                            CFDs are complex instruments and come with a high risk of <br /> losing money rapidly due to leverage. 21.38% of retail investor<br /> accounts generate profits when trading CFDs with this<br /> provider. You should consider whether you understand how<br /> CFDs work and whether you can afford to take the high risk<br /> of losing your money.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                                <img src={facebook} alt="facebook" className="w-full h-full object-cover" />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                                <img src={linkedin} alt="linkedin" className="w-full h-full object-cover" />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                                <img src={instagram} alt="instagram" className="w-full h-full object-cover" />
                            </a>

                            {/* YouTube */}
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                                <img src={youtube} alt="youtube" className="w-full h-full object-cover" />
                            </a>

                            {/* Twitter */}
                            <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                                <img src={twitter} alt="twitter" className="w-full h-full object-cover" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Navigation Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        {/* Quick links */}
                        <div>
                            <h3 className="text-white text-base font-['Gilroy'] mb-4">Quick links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Our Markets</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Platforms</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white text-base font-['Gilroy'] mb-4">Support</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">FAQs</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white text-base font-['Gilroy'] mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">News & Updates</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Partnerships</a></li>
                                <li><a href="#" className="text-white text-sm font-['UrbanistRegular'] hover:text-gray-300 transition-colors">Legal Documents</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal & Copyright Section */}
            <div className="border-t border-gray-800 py-12">
                <div className="relative max-w-7xl mx-auto px-8 py-8">
                    {/* Second CFD Disclaimer */}
                    <p className="text-center text-sm text-[#FFFFFF99] mb-6 font-['UrbanistRegular'] leading-relaxed">
                        CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 21.38% of retail investor accounts generate profits when trading CFDs<br /> with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                    </p>

                    {/* Company Registration */}
                    <p className="text-center text-sm text-[#FFFFFF99] mb-6 font-['UrbanistRegular'] leading-relaxed">
                        Premier Markets Ltd, trading as Premier Markets is a company incorporated under company number: A000003075 in Anguilla. Our registered office is located at<br /> Anguilla, The Valley, Kismet House, Sandy Hill, PO Box P.O.Box 174 The information on this site is not directed at residents of Russia, Afghanistan, Belgium, Canada, India,<br /> United States or any country or jurisdiction where such distribution or use would be contrary to local law, sanctions or regulation.
                    </p>
                </div>
            </div>
            {/* Copyright Notice */}
            <p className="absolute bottom-0 w-full my-4 text-center text-sm text-[#FFFFFF99] font-['UrbanistRegular'] border-t border-[#FFFFFF1A] pt-6 pb-3">
                Copyright © 2025 Premier Markets - All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer

