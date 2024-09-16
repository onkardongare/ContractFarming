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

      <nav className="flex items-center gap-4">
        <div className="relative flex items-center pr-2 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 mr-4"
          >
            <span className="sr-only">View notifications</span>
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
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Your Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
