import Link from 'next/link';
import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { UserContext } from '../pages/_app';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <div>
      <nav className="py-10 mb-12 flex items-center dark:text-white">
        <h1 className="font-burtons text-xl mr-auto">
          <Link href="/">
            set<span className="text-teal-500">hap</span>piah{' '}
          </Link>
        </h1>
        <ul className="flex  bg-gradient-to-r from-cyan-500 to-teal-500 text-white  border-none rounded-md">
          <Link href="/about">
            <li className="px-3 py-2">About</li>
          </Link>
          <Link href="/portfolio">
            <li className="px-3 py-2">Portfolio</li>
          </Link>
          <Link href="/services">
            <li className="px-3 py-2">Services</li>
          </Link>
          <Link href="/blog">
            <li className="px-3 py-2">Blog</li>{' '}
          </Link>
          <Link href="/contact">
            <li className="px-3 py-2">Contact</li>{' '}
          </Link>
        </ul>
        <div className="text-end ml-5">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
