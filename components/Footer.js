import Link from 'next/link';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-gray-200 text-center">
      <div class="w-full border-b border-teal-800"></div>
      <div className=" grid grid-cols-3 gap-7 pt-5 pb-2">
        <h1 className="font-burtons text-xl ">
          <Link href="/">
            set<span className="text-teal-500">hap</span>piah{' '}
          </Link>
        </h1>
        <section>
          <ul className=" grid grid-cols-2 gap-0">
            {' '}
            <Link href="/">
              <li className="">Home</li>
            </Link>
            <Link href="/about">
              <li className=" ">About</li>
            </Link>
            <Link href="/portfolio">
              <li className=" ">Portfolio</li>
            </Link>
            <Link href="/services">
              <li className=" ">Services</li>
            </Link>
            <Link href="/blog">
              {' '}
              <li className=" ">Blog</li>{' '}
            </Link>
            <Link href="/contact">
              {' '}
              <li className=" ">Contact</li>{' '}
            </Link>
          </ul>
        </section>
        <section className="">
          <div className="flex justify-start items-center">
            <HiEnvelope className="flex justify-center text-xl  dark:text-teal-600" />
            <p className="pl-2">sethaappiah@gmail.com</p>
          </div>
          <div className="flex justify-start items-center">
            <FaPhoneSquareAlt className="flex justify-center text-xl  dark:text-teal-600" />
            <p className="pl-2">+233548412778</p>
          </div>
        </section>
      </div>
      <div className="flex justify-center gap-3 mb-4 text-2xl">
        <Link href="https://twitter.com/debug260" target="_blank">
          {' '}
          <AiFillTwitterCircle className="dark:text-teal-600" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
          target="_blank"
        >
          <AiFillLinkedin className="dark:text-teal-600" />
        </Link>
        <Link href="https://github.com/Golyn" target="_blank">
          <BsGithub className="dark:text-teal-600" />{' '}
        </Link>
      </div>
      <div class="w-full border-b border-teal-800"></div>
      <div className="sub-footer ">
        <p> Copyright &copy; 2022 Seth Amankwah</p>
      </div>
    </div>
  );
};

export default Footer;
