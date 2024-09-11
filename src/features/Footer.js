import React from 'react'

function Footer() {
  return (
<footer className="bg-black font-bold text-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2">

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-bold text-white-900 pt-4">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> 1on1 Coaching </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Company Review </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Accounts Review </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> HR Consulting </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> SEO Optimisation </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white-900 pt-4">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> About </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Meet the Team </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Accounts Review </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white-900 pt-4">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Contact </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> FAQs </a>
              </li>

              <li>
                <a href="#" className="text-white-700 transition hover:opacity-75"> Live Chat </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white-100 pt-8">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" className="text-white-500 transition hover:opacity-75"> Terms & Conditions </a>
            </li>

            <li>
              <a href="#" className="text-white-500 transition hover:opacity-75"> Privacy Policy </a>
            </li>

            <li>
              <a href="#" className="text-white-500 transition hover:opacity-75"> Cookies </a>
            </li>
          </ul>

          <p className="mt-8 text-xs text-white-500">&copy; 2022. Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
</footer>
)
}

export default Footer


