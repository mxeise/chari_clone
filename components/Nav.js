import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

import Dropdown from "../utils/Dropdown";

export default function Nav() {
  const [session, loading] = useSession();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo */}
              <Link href="/">
                <a className="block" href="index.html" aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current text-green-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </a>
              </Link>
            </div>
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:flex-grow">
              {/* Desktop menu links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center text-gray-700">
                <li>
                  <Link href="/process">
                    <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">Process</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">Contact</a>
                  </Link>
                </li>
                {/* 1st level: hover */}
                {/* 
                <Dropdown title="Support">
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="contact.html">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="faq.html">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="404.html">
                      404
                    </a>
                  </li>
                </Dropdown>
                */}
              </ul>
              {/* Desktop sign in links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/signin ">
                    <a className="font-medium text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a className="btn-sm text-white bg-green-900 hover:bg-green-700 ml-3">Sign up</a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden">
              {/* Hamburger button */}
              <button
                className={`hamburger ${mobileNavOpen && "active"}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6 fill-current text-gray-800 hover:text-gray-700 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </button>

              {/*Mobile navigation */}
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
              >
                <ul className="bg-white px-4 py-2 rounded-md shadow-2xl">
                  <li>
                    <Link href="/process">
                      <a className="flex font-medium text-gray-600 hover:text-gray-500 py-2">Process</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="flex font-medium text-gray-600 hover:text-gray-500 py-2">Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a className="flex font-medium text-gray-600 hover:text-gray-500 py-2">FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="flex font-medium text-gray-600 hover:text-gray-500 py-2">Contact</a>
                    </Link>
                  </li>
                  {/* 
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 py-2 font-medium">Support</span>
                    <ul className="pl-4">
                      <li>
                        <Link href="/contact">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">Contact us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">Help Center</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">404</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  */}
                  <li>
                    <Link href="/signin">
                      <a className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup">
                      <a className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        Sign up
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
