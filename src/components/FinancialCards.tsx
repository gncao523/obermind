import React from 'react'
import flag1 from '../assets/images/flag1.png'
import frame from '../assets/images/Frame.png'
import frame1 from '../assets/images/Frame (1).png'

interface CurrencyCardProps {
  currencyPair: string
  rate: string
  change: string
  isPositive: boolean
  flag1: string
  trendIcon: string
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currencyPair,
  rate,
  change,
  isPositive,
  flag1: flag1Img,
  trendIcon,
}) => {
  return (
    <div className="bg-white rounded-full shadow-md px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="flex flex-col gap-1">
          <img src={flag1Img} alt="Flag 1" className="w-10 h-6 object-contain" />
        </div>
        <div className="font-['InterBold'] text-lg uppercase">{currencyPair}</div>
      </div>
      <div className="flex items-center gap-2">
        <img src={trendIcon} alt="Trend" className="w-12 h-8 object-contain mt-1" />
        <div>
          <div className="text-base font-['InterBold']">{rate}</div>
          <div className={`font-['InterBold'] text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </div>
        </div>
      </div>
    </div>
  )
}

const FinancialCards: React.FC = () => {
  const cards = [
    {
      id: 1,
      currencyPair: 'USD/EUR',
      rate: '0.00014',
      change: '-234.45',
      isPositive: false,
      flag1,
      trendIcon: frame,
    },
    {
      id: 2,
      currencyPair: 'GBP/USD',
      rate: '1.25432',
      change: '+125.30',
      isPositive: true,
      flag1,
      trendIcon: frame1,
    },
    {
      id: 3,
      currencyPair: 'EUR/JPY',
      rate: '165.432',
      change: '-45.67',
      isPositive: false,
      flag1,
      trendIcon: frame,
    },
    {
      id: 4,
      currencyPair: 'AUD/USD',
      rate: '0.67890',
      change: '+89.12',
      isPositive: true,
      flag1,
      trendIcon: frame1,
    },
  ]

  return (
    <section className="px-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <CurrencyCard
              key={card.id}
              currencyPair={card.currencyPair}
              rate={card.rate}
              change={card.change}
              isPositive={card.isPositive}
              flag1={card.flag1}
              trendIcon={card.trendIcon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialCards

