import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { UserContext } from '../pages/_app';
import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
// import Header from './Header';
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <div>
    //   <nav className="py-10 mb-12 mx-0 flex items-center dark:text-white flex-wrap w-full">
    //     <h1 className="font-burtons text-xl mr-auto">
    //       <Link href="/">
    //         set<span className="text-teal-500">hap</span>piah{' '}
    //       </Link>
    //     </h1>

    //     <div className="md:hidden block h-6 w-6 cursor-pointer mx-0">
    //       <button
    //         className="text-3xl cursor-pointer mx-2"
    //         onClick={handleClickMenu}
    //       >
    //         <BiMenu />
    //       </button>
    //     </div>

    //     <div
    //       className={`${
    //         menuOpen ? 'block' : 'hidden'
    //       } w-full md:flex md:items-center md:w-auto`}
    //     >
    //       <div className="md:flex md:justify-between">
    //         <ul className="justify-start md:flex items-center md:justify-between bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-none rounded-md">
    //           <Link href="/about">
    //             <li className="p-0 md:px-3 py-2 block hover:text-gray-900 font-semibold">
    //               About
    //             </li>
    //           </Link>
    //           <Link href="/portfolio">
    //             <li className="p-0 md:px-3 py-2 block  hover:text-gray-900 font-semibold">
    //               Portfolio
    //             </li>
    //           </Link>
    //           <Link href="/services">
    //             <li className="p-0 md:px-3 py-2 block  hover:text-gray-900 font-semibold">
    //               Services
    //             </li>
    //           </Link>
    //           <Link href="/blog">
    //             <li className="p-0 md:px-3 py-2 block  hover:text-gray-900 font-semibold">
    //               Blog
    //             </li>{' '}
    //           </Link>
    //           <Link href="/contact">
    //             <li className="p-0 md:px-3 py-2 block  hover:text-gray-900 font-semibold">
    //               Contact
    //             </li>{' '}
    //           </Link>
    //         </ul>
    //         <div className="ml-2 md:ml-5 bg-slate-700">
    //           <BsFillMoonStarsFill
    //             onClick={() => setDarkMode(!darkMode)}
    //             className=" cursor-pointer text-2xl static"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <div>
      <nav className="py-10 mb-12 mx-0 flex items-center dark:text-white flex-wrap w-full">
        <h1 className="font-burtons text-xl mr-auto">
          <Link href="/">
            set<span className="text-teal-500">hap</span>piah{' '}
          </Link>
        </h1>

        <div className="md:hidden block h-6 w-6 cursor-pointer mx-0">
          <button
            className="text-3xl cursor-pointer mx-2"
            onClick={handleClickMenu}
          >
            <BiMenu />
          </button>
        </div>

        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex items-center md:justify-between bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-none rounded-md">
            <Link href="/about">
              <li className="md:px-3 py-2 block hover:text-gray-900 font-semibold">
                About
              </li>
            </Link>
            <Link href="/portfolio">
              <li className="md:px-3 py-2 block  hover:text-gray-900 font-semibold">
                Portfolio
              </li>
            </Link>
            <Link href="/services">
              <li className="md:px-3 py-2 block  hover:text-gray-900 font-semibold">
                Services
              </li>
            </Link>
            <Link href="/blog">
              <li className="md:px-3 py-2 block  hover:text-gray-900 font-semibold">
                Blog
              </li>{' '}
            </Link>
            <Link href="/contact">
              <li className="md:px-3 py-2 block  hover:text-gray-900 font-semibold">
                Contact
              </li>{' '}
            </Link>
          </ul>
          <div className="text-end ml-2 md:ml-5">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl static"
            />
          </div>
        </div>
      </nav>
    </div>
    // <>
    //   <Header />
    // </>
  );
};

export default Navbar;
