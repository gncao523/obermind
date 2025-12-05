import React, { useState } from 'react'
import MarketTabs from './chart/MarketTabs'
import AssetList from './chart/AssetList'
import GoldTradingWidget from './chart/GoldTradingWidget'
import MarketStats from './chart/MarketStats'
import chartGraphImage from '../assets/images/chartgraph.png'

const TIMEFRAMES = ['1d', '1h', '4h', '1m', '5m', '15m', '30m', '1w'] as const

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

    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title and Description */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl lg:text-5xl font-['Gilroy'] text-black mb-4">
                        Our Markets
                    </h2>
                    <p className="text-lg text-[#A8A6B1] max-w-3xl mx-auto font-['UrbanistRegular']">
                        Stay informed with the data that matters, on 17,000+ markets. Get the latest<br/> news, trader sentiment, spreads, price action and much more.
                    </p>
                </div>

                {/* Market Category Tabs */}
                <MarketTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Panel - Most Traded Assets */}
                    <AssetList
                        assets={mostTradedAssets}
                        selectedIndex={selectedAssetIndex}
                        onSelect={setSelectedAssetIndex}
                    />

                    {/* Right Panel - Gold Trading Widget */}
                    <div className="lg:col-span-9 grid">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">
                            <GoldTradingWidget />
                            <MarketStats />
                        </div>
                        {/* Chart with Static Image and Time Buttons */}
                        <div className="mt-6 bg-white rounded-lg p-4 relative">
                            {/* Chart Title */}
                            <div className="mb-4">
                                <h3 className="font-['Gilroy'] text-black text-lg">XAU/USD</h3>
                            </div>

                            {/* Static Chart Image */}
                            <div className="relative w-full">
                                <img 
                                    src={chartGraphImage} 
                                    alt="Chart Graph" 
                                    className="w-full h-auto"
                                />
                                
                                {/* Timeframe Buttons - Vertical Array */}
                                <div className="absolute right-0 lg:right-4 top-40 lg:top-16 flex flex-row sm:flex-col gap-1">
                                    {TIMEFRAMES.map((tf) => (
                                        <button
                                            key={tf}
                                            onClick={() => setActiveTimeframe(tf)}
                                            className={`px-2 py-3 rounded-2xl text-xs font-['RobotoRegular'] transition-colors ${
                                                activeTimeframe === tf
                                                    ? 'bg-[#ED1D25] text-white'
                                                    : 'bg-black text-white hover:bg-gray-800'
                                            }`}
                                        >
                                            {tf}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChartSection
