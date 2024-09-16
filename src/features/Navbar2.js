import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

const Navbar2 = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-green-600 text-white">
      <Link to="/home">
        <span className="flex items-center ml-5">
          <img className="size-11" src={logo} alt="Logo" />
          <p className="text-2xl font-semibold font-sans ml-2 hidden md:block">
            KRISHIKARAR
          </p>
        </span>
      </Link>

      <nav className="flex items-center gap-5">
        <div className="relative flex items-center pr-2 sm:pr-0">
            <Link to="/guide" className='mr-8 text-xl font-sans  text-white hover:underline hidden sm:block'>
                How it works  ? 
            </Link>
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 mr-4"
          >
            <BellIcon aria-hidden="true" className="h-7 w-7" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3 mr-4">
            <div>
              <MenuButton className="relative flex rounded-full text-sm">
                <img
                  alt="profileimg"
                  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                  className="h-9 w-9 rounded-full "
                />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <button className="block px-4 py-2 text-sm text-gray-700 ">
                  Logout
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
