import Link from 'next/link';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
// import deved from '../public/dev-ed-wave.png';
// import techguy from '../public/techguy.png';
import codeboy from '../public/codeboy.png';

import Image from 'next/image';

const About = () => {
  return (
    <>
      <section className="min-h-screen" id="about">
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Seth Amankwah
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Developer and designer.
          </h3>
          <p className="text-base py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content
            needs. Let's get in touch!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="https://twitter.com/debug260" target="_blank">
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.linkedin.com/in/seth-a-amankwah-452700120/"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href="https://github.com/Golyn" target="_blank">
              <BsGithub />
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
              href="https://drive.google.com/file/d/1-lxk6gMSi7ztdGS3BaI4CDPxLWpfQbxE/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-50 h-50 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={codeboy} alt="profile avarta" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
