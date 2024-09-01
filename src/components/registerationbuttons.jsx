import React from 'react';
import '../styles/registerationbuttons.css';
import { Link } from 'react-router-dom';

function RegistrationButtons() {
  return (
    <div class="flex justify-center items-center mt-12 space-x-8">
      
      <Link to='/farmer-signup' className='btn btn-farmer bg-[#1f3b2f] text-white text-3xl font-medium py-3 px-16 rounded-full transition duration-300 ease-in-out'>
        <button >
          Register as a<br/> Farmer
        </button>
      </Link>
      
        <span class="text-2xl font-semibold text-gray-700 opacity-70">or &nbsp;</span>

      <Link to='/buyer-signup' className='btn btn-farmer bg-[#1f3b2f] text-white text-3xl font-medium py-3 px-16 rounded-full transition duration-300 ease-in-out'>
        <button >
        Register as a <br/> Buyer/Business
        </button>
      </Link>
    </div>

  );
}

export default RegistrationButtons;
