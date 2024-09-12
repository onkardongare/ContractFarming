import  { React ,useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './imgs/contract.png'

const DefaultHome = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };


  const faqs = [
    { question: "What is Assured Contract Farming?", answer: "Assured Contract Farming is a system that connects farmers with buyers, ensuring a guaranteed purchase of crops at pre-agreed terms." },
    { question: "How does it benefit farmers?", answer: "It provides farmers with a secure market, fixed pricing, and often includes access to quality inputs and technical support." },
    { question: "Can I cancel a contract?", answer: "Contract terms vary, but most include provisions for cancellation under specific circumstances. Always review your contract carefully." }
  ];

  return (
    <div className={`font-sans bg-gray-900 text-white }`}>
      <header className="p-4 flex justify-between items-center bg-green-600 text-white pb-6">
      <Link to="/">
          <p className="text-2xl font-semibold font-serif ml-2 sm:hidden">
            🌱 
          </p>
          <p className="text-2xl font-semibold font-sans ml-2 hidden sm:block">
            🌱 Assured Contract Farming
          </p>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className='ml-4 hover:underline'>
            Home
          </Link>
          <Link to="/about" className='ml-4 hover:underline'>
            About
          </Link>
          <Link to="/contact" className='ml-4 hover:underline'>
            Contact
          </Link>
          <Link to="/login">
          <button
            type="button"
            className="rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Login
          </button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="bg-green-100 dark:bg-green-800 p-16 text-center  bg-cover bg-center filter backdrop-blur-lg " style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h1 className="text-4xl bg-black font-bold mb-4 bg-opacity-50 text-yellow-400 rounded-lg">Assured Contract Farming</h1>
          <p className=" bg-black bg-opacity-35 text-xl max-w-2xl mx-auto mb-8 text-white-500 rounded-lg">
            Connecting farmers with buyers for sustainable and profitable agriculture.
          </p>
          <Link to='signup'
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mr-4"
          >
            Get Started
          </Link>
          <button className="px-6 py-3 bg-white text-green-600 rounded-lg border border-green-600 hover:bg-green-50 transition duration-300">
            Learn More
          </button>
        </section>

        <section className="p-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="flex flex-wrap justify-around">
            {[
              { title: 'Guaranteed Purchase', description: 'Secure contracts ensure your produce will be bought.' },
              { title: 'Expert Support', description: 'Access to agricultural experts for guidance.' },
              { title: 'Market Insights', description: 'Stay informed with the latest market trends.' }
            ].map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-yellow-100 dark:bg-green-800 p-16 text-center">
          <h2 className=" text-black text-4xl dark:bg-gray-800text-6xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 bg-black dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </button>
                {expandedFAQ === index && (
                  <div className="mt-2 text-black p-4 bg-green-50 rounded-lg">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white text-black p-8 text-center">
        <p className="mb-4 ">© 2024 Assured Contract Farming. All rights reserved.</p>
        <div>
          <a href="#" className="hover:underline mr-4">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default DefaultHome;