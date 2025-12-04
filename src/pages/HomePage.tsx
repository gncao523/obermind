import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FinancialCards from '../components/FinancialCards'
import MarketsSection from '../components/MarketsSection'
import TrustSection from '../components/TrustSection'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FinancialCards />
      <MarketsSection />
      <TrustSection />
    </div>
  )
}

export default HomePage

