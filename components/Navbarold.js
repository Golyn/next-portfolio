import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { UserContext } from '../pages/_app';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav className="py-10 mb-12 flex items-center dark:text-white">
        <h1 className="font-burtons text-xl mr-auto">
          <Link href="/">
            set<span className="text-teal-500">hap</span>piah{' '}
          </Link>
        </h1>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gradient-to-r from-cyan-500 to-teal-500 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 text-white  border-none rounded-md">
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
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={handleClickMenu}
        >
          {menu ? <BiMenu /> : <FaTimes />}
          {/* style={{ fontWeight: 'normal' }} */}
        </span>
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
