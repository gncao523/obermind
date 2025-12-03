import React from 'react'

interface FinancialCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  isPositive: boolean
}

const FinancialCard: React.FC<FinancialCardProps> = ({ icon, label, value, change, isPositive }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <div className="text-sm font-bold text-gray-700 mb-3">{label}</div>
      {/* Mini chart placeholder */}
      <div className="w-20 h-10 mb-3 flex items-end justify-center gap-1">
        <div className="w-1.5 h-4 bg-gray-300 rounded-t"></div>
        <div className="w-1.5 h-5 bg-gray-300 rounded-t"></div>
        <div className="w-1.5 h-6 bg-gray-300 rounded-t"></div>
        <div className="w-1.5 h-4 bg-gray-300 rounded-t"></div>
        <div className="w-1.5 h-3 bg-gray-300 rounded-t"></div>
      </div>
      <div className="text-xl font-bold text-gray-900 mb-1">{value}</div>
      <div className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </div>
    </div>
  )
}

const FinancialCards: React.FC = () => {
  const cards = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      ),
      label: 'USD/EUR',
      value: '0.00014',
      change: '-234.45',
      isPositive: false,
    },
    {
      icon: (
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      label: 'XAUUSD',
      value: '0.00014',
      change: '-234.45',
      isPositive: false,
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      ),
      label: 'GBP/USD',
      value: '0.00014',
      change: '-234.45',
      isPositive: false,
    },
    {
      icon: (
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      ),
      label: 'EUR/USD',
      value: '0.00014',
      change: '-234.45',
      isPositive: false,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <FinancialCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              change={card.change}
              isPositive={card.isPositive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialCards

