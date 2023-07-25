// import Navbar from '../components/Navbar';
import Link from 'next/link';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="min-h-screen dark:text-white py-10 my-10">
      <h1 className="text-3xl border-l-4 border-teal-500 pl-5 mb-6 py-1">
        Contact Me
      </h1>
      <p className="text-center mt-20 text-2xl">
        Get in touch with me to get the ball rolling
      </p>
      <div className="flex justify-center gap-16 mb-4 mt-20 text-4xl">
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
      <div className=" mb-20">
        <FaPhoneSquareAlt className="mx-auto mb-3 text-4xl dark:text-teal-600" />
        <p className="text-xl text-center">+233548412778</p>
      </div>
      <section className="mb-32">
        <div>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-8/12 mx-auto"
            action="https://formsubmit.co/3b92ad64449e9e77c2d789592be3779f "
            method="POST"
            target="_blank"
          >
            {' '}
            <h1 className="mb-6 font-bold text-teal-600">Please message me</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none shadow-slate-300"
                id="name"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none shadow-slate-300"
                id="email"
                type="email"
                placeholder="email"
                required
              />
              <input
                type="hidden"
                name="_subject"
                value="New submission!"
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none shadow-slate-300"
                id="message"
                type="textarea"
                name="message"
                placeholder="Lorem..."
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
