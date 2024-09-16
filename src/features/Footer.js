import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white font-bold pl-6">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-4">Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-75">1on1 Coaching</a></li>
              <li><a href="#" className="hover:opacity-75">Company Review</a></li>
              <li><a href="#" className="hover:opacity-75">Accounts Review</a></li>
              <li><a href="#" className="hover:opacity-75">HR Consulting</a></li>
              <li><a href="#" className="hover:opacity-75">SEO Optimisation</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-75">About</a></li>
              <li><a href="#" className="hover:opacity-75">Meet the Team</a></li>
              <li><a href="#" className="hover:opacity-75">Accounts Review</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Helpful Links</h5>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:opacity-75">Contact</Link></li>
              <li><a href="#" className="hover:opacity-75">FAQs</a></li>
              <li><a href="#" className="hover:opacity-75">Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-75">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-75">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-75">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">© 2024 KRISHIKARAR. <br/><br/> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
