// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Landdock.jpg';
import { Button } from './button';

interface NavLinkProps {
  href: string;
  text: string;
}

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center  py-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Landdock Logo"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="50% 50%"
              />
              {/* <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">Landdock</span> */}
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            {/* <button className="text-gray-500 dark:text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button> */}
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/services" text="Services" />
            <NavLink href="/contact" text="Contact" />
          </div>

          {/* Login and Signup */}
          
        </div>
        <div className='hidden md:flex items-center justify-end space-x-4' style={{marginInlineStart:400}}>
            <NavLink href="#" text="Login" />
            <NavLink href="#" text="Signup" />
            <Button>Request a demo</Button>
        </div>
        {/* <div className='hidden md:flex ' >
            
        </div> */}
      </div>

      {/* Mobile menu */}
      {/* <div className="md:hidden">
        <div className="flex flex-col space-y-4 mt-4">
          <NavLinkMobile href="/" text="Home" />
          <NavLinkMobile href="/about" text="About" />
          <NavLinkMobile href="/services" text="Services" />
          <NavLinkMobile href="/contact" text="Contact" />
          <NavLinkMobile href="#" text="Login" />
          <NavLinkMobile href="#" text="Signup" />
        </div>
      </div> */}
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <Link href={href}>
    <span className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md transition duration-300">
      {text}
    </span>
  </Link>
);

const NavLinkMobile: React.FC<NavLinkProps> = ({ href, text }) => (
  <Link href={href}>
    <span className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white py-2 rounded-md transition duration-300 block">
      {text}
    </span>
  </Link>
);

export default Navbar;
