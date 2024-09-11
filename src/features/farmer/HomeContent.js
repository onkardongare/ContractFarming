import React, { useState } from 'react'
import { ArrowRight, Leaf, DollarSign, Users, BarChart, FileText, Search, PlusCircle } from 'lucide-react'

export default function HomeContent() {
  const [acres, setAcres] = useState('1')
  const [crop, setCrop] = useState('wheat')
  const [activeCard, setActiveCard] = useState(null)
  const [activeTab, setActiveTab] = useState('income')

  const calculateEarnings = () => {
    const baseEarnings = {
      wheat: 600,
      corn: 800,
      soybeans: 700
    }
    return (parseFloat(acres) * baseEarnings[crop]).toFixed(2)
  }

  const handleCardClick = (cardType) => {
    setActiveCard(cardType)
    alert(`You've chosen to ${cardType.toLowerCase()}. This feature is coming soon!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Grow Your Future with Assured Contract Farming</h1>
        <p className="text-xl mb-6">Secure your income, access modern techniques, and join a community of forward-thinking farmers.</p>
        
        {/* Interactive Get Started Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {['View Contracts', 'Find Buyers', 'Create Contract'].map((action, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-300 bg-white rounded-lg shadow-md p-6 ${activeCard === action ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => handleCardClick(action)}
            >
              <h3 className="text-lg font-semibold mb-2">{action}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {action === 'View Contracts' && "View and manage your existing contracts"}
                {action === 'Find Buyers' && "Discover the most suitable buyers for your produce"}
                {action === 'Create Contract' && "Start a new contract farming agreement"}
              </p>
              <div className="flex justify-center mb-4">
                {action === 'View Contracts' && <FileText className="h-12 w-12 text-blue-600" />}
                {action === 'Find Buyers' && <Search className="h-12 w-12 text-green-600" />}
                {action === 'Create Contract' && <PlusCircle className="h-12 w-12 text-purple-600" />}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                {action}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Contract Farming?</h2>
        <div className="w-full">
          <div className="flex mb-4">
            {['income', 'support', 'market', 'technology'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 px-4 text-center ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === 'income' && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Stable Income</h3>
                <p className="text-gray-600 mb-4">Secure your financial future with predetermined prices.</p>
                <DollarSign className="h-12 w-12 mb-4 text-green-600" />
                <p>With contract farming, you'll know your income before you even plant. Our agreements guarantee a fair price for your crops, protecting you from market fluctuations.</p>
              </div>
            )}
            {activeTab === 'support' && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 mb-4">Access to agricultural experts and continuous guidance.</p>
                <Users className="h-12 w-12 mb-4 text-blue-600" />
                <p>Our team of agricultural experts is always ready to assist you. From crop selection to pest management, we provide continuous support to ensure your success.</p>
              </div>
            )}
            {activeTab === 'market' && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Market</h3>
                <p className="text-gray-600 mb-4">Never worry about selling your produce again.</p>
                <BarChart className="h-12 w-12 mb-4 text-purple-600" />
                <p>With our extensive network of buyers, your harvest is guaranteed to find a market. No more uncertainty about where to sell your crops.</p>
              </div>
            )}
            {activeTab === 'technology' && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
                <p className="text-gray-600 mb-4">Leverage cutting-edge farming techniques and equipment.</p>
                <Leaf className="h-12 w-12 mb-4 text-green-600" />
                <p>Gain access to the latest farming technologies and techniques. Improve your yield and reduce costs with our modern agricultural practices.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Earnings Calculator */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Estimate Your Earnings</h3>
          <p className="text-gray-600 mb-4">See how much you could earn with contract farming</p>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="acres" className="block text-sm font-medium text-gray-700 mb-1">Acres to Farm</label>
                <input 
                  id="acres" 
                  type="number" 
                  value={acres} 
                  onChange={(e) => setAcres(e.target.value)} 
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
                <select
                  id="crop"
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="wheat">Wheat</option>
                  <option value="corn">Corn</option>
                  <option value="soybeans">Soybeans</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg">Estimated Earnings:</p>
              <p className="text-3xl font-bold text-green-600">${calculateEarnings()}</p>
              <p className="text-sm text-gray-500">*Based on average yields and current market prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Farmers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote: "Joining the contract farming program was the best decision I've made for my farm. The stable income and expert support have transformed my business.",
              author: "John Doe",
              crop: "Wheat Farmer"
            },
            {
              quote: "I was skeptical at first, but the guaranteed market and access to modern technology have increased my yields and profits significantly.",
              author: "Jane Smith",
              crop: "Corn Farmer"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300">
              <p className="italic mb-4">{testimonial.quote}</p>
              <p className="font-semibold">- {testimonial.author}, {testimonial.crop}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}