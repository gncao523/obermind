import React, { useState } from 'react'
import btcIcon from '../assets/images/btc.png'
import ethIcon from '../assets/images/eth.png'
import goldBg from '../assets/images/gold-bg.png'
import downRightArrow from '../assets/images/downarrow.png'
import upRightArrow from '../assets/images/upright.png'
import buyBg from '../assets/images/buybtn.png'
import sellBg from '../assets/images/sellbtn.png'
import rightArrow from '../assets/images/rightarrow.svg'

const ChartSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Most Traded')
    const [activeTimeframe, setActiveTimeframe] = useState('1h')
    const [selectedAssetIndex, setSelectedAssetIndex] = useState(0)

    const tabs = ['Most Traded', 'Commodities', 'Indices', 'Cryptocurrencies', 'Shares', 'ETFs']

    const mostTradedAssets = [
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'ETH', name: 'Ethereum', price: '524,0', change: '+3,25%', isBitcoin: false },
    ]

    const timeframes = ['1d', '1h', '4h', '1m', '5m', '15m', '30m', '1w']

    // Chart data points matching the screenshot (fluctuating line from Jan to Dec)
    const chartData = [
        { x: 0, y: 25 },    // Jan
        { x: 9, y: 30 },    // Feb
        { x: 18, y: 35 },   // Mar
        { x: 27, y: 40 },   // Apr
        { x: 36, y: 45 },   // May
        { x: 45, y: 50 },   // Jun
        { x: 54, y: 55 },   // Jul (highlight point)
        { x: 63, y: 52 },   // Aug
        { x: 72, y: 58 },   // Sep
        { x: 81, y: 60 },   // Oct
        { x: 90, y: 65 },   // Nov
        { x: 100, y: 70 },  // Dec
    ]

    // Generate smooth path for the chart line
    const pathData = chartData.map((point, index) => {
        const x = point.x
        const y = 100 - point.y
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')



    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title and Description */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl lg:text-5xl font-['Gilroy'] text-black mb-4">
                        Our Markets
                    </h2>
                    <p className="text-lg text-[#A8A6B1] max-w-3xl mx-auto font-['UrbanistRegular']">
                        Stay informed with the data that matters, on 17,000+ markets. Get the latest news, trader sentiment, spreads, price action and much more.
                    </p>
                </div>

                {/* Market Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 cursor-pointer rounded-full font-['UrbanistRegular'] transition-colors ${activeTab === tab
                                ? 'bg-[#ED1D25] text-white'
                                : 'bg-white text-[#333333] border-2 border-[#ED1D25]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Panel - Most Traded Assets */}
                    <div className="lg:col-span-3 space-y-3">
                        {mostTradedAssets.map((asset, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedAssetIndex(index)}
                                className={`p-4 rounded-2xl border cursor-pointer transition-colors ${selectedAssetIndex === index
                                    ? 'bg-[#ED1D25] border-[#ED1D25]'
                                    : 'bg-white border-gray-300 hover:border-[#ED1D25]'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={asset.isBitcoin ? btcIcon : ethIcon}
                                            alt={asset.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    {/* Symbol and Name - Middle */}
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-['Gilroy'] font-bold text-base ${selectedAssetIndex === index ? 'text-white' : 'text-black'
                                            }`}>
                                            {asset.symbol}
                                        </div>
                                        <div className={`text-sm font-['RobotoRegular'] ${selectedAssetIndex === index ? 'text-white' : 'text-gray-500'
                                            }`}>
                                            {asset.name}
                                        </div>
                                    </div>

                                    {/* Price and Change - Right */}
                                    <div className="flex items-center justify-center gap-x-1 tracking-widest">
                                        <div className={`font-['Gilroy'] font-bold text-base mb-1 ${selectedAssetIndex === index ? 'text-white' : 'text-black'
                                            }`}>
                                            ₽ {asset.price}
                                        </div>
                                        <div className={`text-base font-['RobotoRegular'] font-bold ${selectedAssetIndex === index ? 'text-white' : 'text-green-600'
                                            }`}>
                                            {asset.change}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Panel - Gold Trading Widget */}
                    <div className="lg:col-span-9 grid">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">
                            <div className="relative lg:col-span-8 h-64 sm:h-56 lg:h-48 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                                <img src={goldBg} alt="gold" className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-0" />
                                <span className="absolute top-7 sm:top-4 left-4 sm:left-4 sm:top-8 sm:left-8 lg:top-12 lg:left-12 font-['Gilroy'] font-bold text-xl sm:text-2xl text-[red] sm:text-white z-10">Gold</span>
                                <img src={rightArrow} alt="arrow-up" className="block lg:hidden absolute top-10 left-17 w-4 h-2 object-cover z-0" />
                                <div
                                    className="w-full sm:w-auto font-['UrbanistRegular'] text-white px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-xl sm:rounded-2xl mt-8 sm:mt-0 z-10"
                                    style={{ backgroundImage: `url(${buyBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                >
                                    Buy <br /> <span className="flex items-center gap-1 sm:gap-2 font-['Gilroy'] font-bold text-lg sm:text-xl lg:text-2xl text-white">3773.31 <img src={downRightArrow} alt="arrow-up" className="w-3 h-3 sm:w-4 sm:h-4" /></span>
                                </div>
                                <div
                                    className="w-full sm:w-auto font-['UrbanistRegular'] text-[red] px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-xl sm:rounded-2xl z-10 border-2 border-[red] sm:border-none"
                                    style={{ backgroundImage: `url(${sellBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}

                                >
                                    Sell <br /> <span className="flex items-center gap-1 sm:gap-2 font-['Gilroy'] font-bold text-lg sm:text-xl lg:text-2xl text-[red]">3773.61 <img src={upRightArrow} alt="arrow-up" className="w-3 h-3 sm:w-4 sm:h-4" /></span>
                                </div>
                                <svg className="absolute top-8 right-4 sm:top-3 sm:right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-10 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 z-10" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.92188 9.5625C2.92188 9.2691 3.15972 9.03125 3.45312 9.03125H7.4375C7.7309 9.03125 7.96875 9.2691 7.96875 9.5625V13.5469C7.96875 13.8403 7.7309 14.0781 7.4375 14.0781C7.1441 14.0781 6.90625 13.8403 6.90625 13.5469V10.0938H3.45312C3.15972 10.0938 2.92188 9.8559 2.92188 9.5625Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.81315 9.18685C8.02062 9.39432 8.02062 9.73068 7.81315 9.93815L3.0319 14.7194C2.82443 14.9269 2.48807 14.9269 2.2806 14.7194C2.07313 14.5119 2.07313 14.1756 2.2806 13.9681L7.06185 9.18685C7.26932 8.97938 7.60568 8.97938 7.81315 9.18685Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.02995 2.4362C4.22921 2.23694 4.49946 2.125 4.78125 2.125H13.8125C14.0943 2.125 14.3645 2.23694 14.5638 2.4362C14.7631 2.63546 14.875 2.90571 14.875 3.1875V12.2188C14.875 12.5005 14.7631 12.7708 14.5638 12.9701C14.3645 13.1693 14.0943 13.2812 13.8125 13.2812H10.625C10.3316 13.2812 10.0938 13.0434 10.0938 12.75C10.0938 12.4566 10.3316 12.2188 10.625 12.2188H13.8125V3.1875L4.78125 3.1875L4.78125 6.375C4.78125 6.6684 4.5434 6.90625 4.25 6.90625C3.9566 6.90625 3.71875 6.6684 3.71875 6.375V3.1875C3.71875 2.90571 3.83069 2.63546 4.02995 2.4362Z" fill="white" />
                                </svg>
                            </div>
                            <div className="lg:col-span-4 min-h-[200px] sm:min-h-[180px] lg:min-h-0" style={{ backgroundImage: `url(${goldBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <div className="p-4 lg:p-0">asdf</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChartSection

