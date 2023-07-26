import Link from 'next/link';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="font-burtons text-xl dark:text-white">
            <Link href="/">
              set<span className="text-teal-500">hap</span>piah{' '}
            </Link>
          </h1>
          <div className="flex justify-between pt-10">
            <Link href="https://twitter.com/debug260" target="_blank">
              {' '}
              <AiFillTwitterCircle
                size="1.5rem"
                className="text-gray-400 dark:text-teal-600"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
              target="_blank"
            >
              <AiFillLinkedin
                size="1.5rem"
                className="text-gray-400 dark:text-teal-600 "
              />
            </Link>
            <Link href="https://github.com/Golyn" target="_blank">
              <BsGithub
                size="1.5rem"
                className="text-gray-400 dark:text-teal-600 "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:underline ">
                <li className="pb-1">Home</li>
              </Link>
              <Link href="/about" className="hover:underline ">
                <li className="pb-1">About</li>
              </Link>
              <Link href="/portfolio" className="hover:underline ">
                <li className="pb-1">Portfolio</li>
              </Link>
              <Link href="/services" className="hover:underline ">
                <li className="pb-1">Services</li>
              </Link>
              <Link href="/blog" className="hover:underline ">
                {' '}
                <li className="pb-1">Blog</li>{' '}
              </Link>
              <Link href="/contact" className="hover:underline ">
                <li className="pb-1">Contact</li>{' '}
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow me
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  href="https://github.com/Golyn"
                  target="_blank"
                  className="hover:underline "
                >
                  GitHub
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://twitter.com/debug260"
                  target="_blank"
                  className="hover:underline "
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
                  target="_blank"
                  className="hover:underline "
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
              Contact
            </h2>
            <ul className=" text-gray-600 dark:text-gray-400 items-center">
              {/* text-gray-600 dark:text-gray-400  */}
              <li className="mb-2">
                <div className="flex justify-center items-center flex-wrap">
                  <FaPhoneSquareAlt className="flex justify-center text-lg  dark:text-teal-600" />
                  <p className="pl-2">+233548412778</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center items-center flex-wrap">
                  <HiEnvelope className="justify-center text-lg dark:text-teal-600" />
                  <p className="pl-2 ">sethaappiah@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="/" target="_blank" className="hover:underline ">
            SETHAAPPIAH™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="justify-center flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-2xl">
          <Link href="https://twitter.com/debug260" target="_blank">
            <AiFillTwitterCircle className="text-gray-600 dark:text-teal-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
            target="_blank"
          >
            <AiFillLinkedin className="text-gray-600 dark:text-teal-600" />
          </Link>
          <Link href="https://github.com/Golyn" target="_blank">
            <BsGithub className="text-gray-600 dark:text-teal-600" />{' '}
          </Link>
        </div>
      </div>
    </footer>
    // <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
    //   <div className="md:flex md:justify-between">
    //     <div className="mb-6 md:mb-0">
    //       <h1 className="font-burtons text-xl dark:text-white">
    //         <Link href="/">
    //           set<span className="text-teal-500">hap</span>piah{' '}
    //         </Link>
    //       </h1>

    //     </div>
    //     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //           Resources
    //         </h2>
    //         <ul className="text-gray-600 dark:text-gray-400">
    //           <Link href="/" className="hover:underline ">
    //             <li className="pb-1">Home</li>
    //           </Link>
    //           <Link href="/about" className="hover:underline ">
    //             <li className="pb-1">About</li>
    //           </Link>
    //           <Link href="/portfolio" className="hover:underline ">
    //             <li className="pb-1">Portfolio</li>
    //           </Link>
    //           <Link href="/services" className="hover:underline ">
    //             <li className="pb-1">Services</li>
    //           </Link>
    //           <Link href="/blog" className="hover:underline ">
    //             {' '}
    //             <li className="pb-1">Blog</li>{' '}
    //           </Link>
    //           <Link href="/contact" className="hover:underline ">
    //             <li className="pb-1">Contact</li>{' '}
    //           </Link>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //           Follow me
    //         </h2>
    //         <ul className="text-gray-600 dark:text-gray-400">
    //           <li className="mb-4">
    //             <Link
    //               href="https://github.com/Golyn"
    //               target="_blank"
    //               className="hover:underline "
    //             >
    //               GitHub
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link
    //               href="https://twitter.com/debug260"
    //               target="_blank"
    //               className="hover:underline "
    //             >
    //               Twitter
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link
    //               href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
    //               target="_blank"
    //               className="hover:underline "
    //             >
    //               Linkedin
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
    //           Contact
    //         </h2>
    //         <ul className=" text-gray-600 dark:text-gray-400 items-center">
    //           {/* text-gray-600 dark:text-gray-400  */}
    //           <li className="mb-2">
    //             <div className="flex justify-center items-center flex-wrap">
    //               <FaPhoneSquareAlt className="flex justify-center text-lg  dark:text-teal-600" />
    //               <p className="pl-2">+233548412778</p>
    //             </div>
    //           </li>
    //           <li>
    //             <div className="flex justify-center items-center flex-wrap">
    //               <HiEnvelope className="justify-center text-lg dark:text-teal-600" />
    //               <p className="pl-2 ">sethaappiah@gmail.com</p>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //   <div className="sm:flex sm:items-center sm:justify-between">
    //     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //       © 2023{' '}
    //       <Link href="/" target="_blank" className="hover:underline ">
    //         SETHAAPPIAH™
    //       </Link>
    //       . All Rights Reserved.
    //     </span>
    //     <div className="justify-center flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-2xl">
    //       <Link href="https://twitter.com/debug260" target="_blank">
    //         <AiFillTwitterCircle className="dark:text-teal-600" />
    //       </Link>
    //       <Link
    //         href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
    //         target="_blank"
    //       >
    //         <AiFillLinkedin className="dark:text-teal-600" />
    //       </Link>
    //       <Link href="https://github.com/Golyn" target="_blank">
    //         <BsGithub className="dark:text-teal-600" />{' '}
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
