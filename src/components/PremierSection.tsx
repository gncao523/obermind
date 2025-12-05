import React from 'react'
import sectionBg from '../assets/images/premierbg.png'

// Icon components
const HeadphoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C8.13 1 5 4.13 5 8V14C5 15.66 6.34 17 8 17H9V10H8C7.45 10 7 9.55 7 9V8C7 4.69 9.69 2 13 2C16.31 2 19 4.69 19 8V9C19 9.55 18.55 10 18 10H17V17H18C19.66 17 21 15.66 21 14V8C21 4.13 17.87 1 14 1H12Z" fill="#FC1B1B" />
  </svg>
)

const MailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#FC1B1B" />
  </svg>
)

const GlobeIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9C18 7.21997 17.4722 5.47991 16.4832 3.99987C15.4943 2.51983 14.0887 1.36628 12.4442 0.685088C10.7996 0.00389957 8.99002 -0.17433 7.24419 0.172936C5.49836 0.520203 3.89471 1.37737 2.63604 2.63604C1.37737 3.89471 0.520203 5.49836 0.172936 7.24419C-0.17433 8.99002 0.00389957 10.7996 0.685088 12.4442C1.36628 14.0887 2.51983 15.4943 3.99987 16.4832C5.47991 17.4722 7.21997 18 9 18H9.09375C11.455 17.9974 13.7189 17.0583 15.3886 15.3886C17.0583 13.7189 17.9974 11.455 18 9.09375V9.0465V9ZM16.5 9C16.4998 9.66739 16.4092 10.3317 16.2308 10.9748C16.2165 11.0265 16.1913 11.0746 16.1569 11.1158C16.1224 11.157 16.0795 11.1903 16.0311 11.2135C15.9827 11.2366 15.9299 11.2491 15.8762 11.2501C15.8225 11.2511 15.7693 11.2406 15.72 11.2193C15.2569 11.0188 14.8617 10.6885 14.5823 10.2683L12.9188 7.77225C12.7475 7.51547 12.5155 7.30492 12.2434 7.1593C11.9713 7.01368 11.6674 6.9375 11.3588 6.9375H11.034C10.487 6.9375 9.96239 6.7202 9.57559 6.33341C9.1888 5.94662 8.9715 5.42201 8.9715 4.875C8.9715 4.32799 9.1888 3.80339 9.57559 3.4166C9.96239 3.0298 10.487 2.8125 11.034 2.8125H13.113C13.1907 2.81251 13.2664 2.83662 13.3298 2.8815C14.3091 3.57338 15.1081 4.49013 15.6598 5.55479C16.2114 6.61945 16.4996 7.80092 16.5 9ZM1.63425 7.61625C1.65157 7.53142 1.6977 7.4552 1.76483 7.40052C1.83195 7.34583 1.91593 7.31606 2.0025 7.31625H5.25525C5.60012 7.31528 5.94176 7.38273 6.26038 7.51468C6.57901 7.64664 6.8683 7.84049 7.1115 8.085L7.95 8.925C8.42327 9.39851 8.69774 10.035 8.71726 10.7042C8.73678 11.3733 8.49987 12.0247 8.055 12.525L7.03575 13.6718C6.73061 14.0152 6.5622 14.4588 6.5625 14.9183V15.5385C6.56247 15.6008 6.54694 15.662 6.51732 15.7168C6.4877 15.7715 6.44491 15.818 6.39282 15.8521C6.34073 15.8862 6.28097 15.9068 6.21894 15.912C6.15691 15.9172 6.09456 15.9069 6.0375 15.882C4.69172 15.3034 3.54486 14.3433 2.7385 13.1203C1.93214 11.8973 1.50159 10.4649 1.5 9C1.50077 8.53554 1.54573 8.0722 1.63425 7.61625Z" fill="#ED1D25" />
  </svg>

)

interface Testimonial {
  text: string
  name: string
  initials: string
  icon: 'headphone' | 'mail' | 'globe'
}

const testimonials: Testimonial[] = [
  {
    text: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
    name: "Adam Keller",
    initials: "AK",
    icon: "headphone"
  },
  {
    text: "Premier works well for me. KYC was fast and support people (Thx milos!!) 🤗 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    name: "Lucas Vermeer",
    initials: "LV",
    icon: "headphone"
  },
  {
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    name: "David Lorens",
    initials: "DL",
    icon: "mail"
  },
  {
    text: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 😊",
    name: "Marco Lazzari",
    initials: "ML",
    icon: "globe"
  },
  {
    text: "I think Premier's trading cost are low compare to others Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
    name: "Petar Ilic",
    initials: "PL",
    icon: "mail"
  },
  {
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
    name: "Mark \"Clips\" Renard",
    initials: "MR",
    icon: "mail"
  },
  {
    text: "Good service 😊 Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
    name: "TradeAce92",
    initials: "TA",
    icon: "headphone"
  },
  {
    text: "Multiple withdraws made, all success Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    name: "Shivani Kaur",
    initials: "SK",
    icon: "globe"
  },
  {
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    name: "Mateusz Durek",
    initials: "MD",
    icon: "mail"
  }
]

const PremierSection: React.FC = () => {
  const getIcon = (iconType: 'headphone' | 'mail' | 'globe') => {
    switch (iconType) {
      case 'headphone':
        return <HeadphoneIcon />
      case 'mail':
        return <MailIcon />
      case 'globe':
        return <GlobeIcon />
      default:
        return <MailIcon />
    }
  }

  return (
    <section className="relative">
      <img src={sectionBg} alt="premier" className="absolute top-0 left-0 w-full h-343 object-cover z-0" />
      <div className="relative top-0 max-w-7xl mx-auto py-20 px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-['Gilroy'] text-black mb-4">
            What <span className="text-[#FC1B1B]">Premier</span> Traders <br /> are saying about us
          </h2>
          <p className="text-base lg:text-lg text-[#737373] font-['UrbanistRegular'] mb-6">
            Join a growing community of professionals who rely on our platform to<br /> trade smarter every day.
          </p>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 9L4.5 6L7.5 3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L7.5 6L4.5 3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-[1px]"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#FFC4C6]">
                {/* Testimonial Text */}
                <p
                  className="text-sm text-black mb-6 font-['UrbanistRegular'] leading-relaxed pb-6"
                  style={{
                    borderBottom: '1px solid',
                    borderImage: 'linear-gradient(to right, #FFC4C6, #FFC8CA) 1'
                  }}
                >
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <span className="text-white text-sm font-['Gilroy']">
                        {testimonial.initials}
                      </span>
                    </div>
                    {/* Name */}
                    <span className="text-sm font-['Gilroy'] text-black">
                      {testimonial.name}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {getIcon(testimonial.icon)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PremierSection

