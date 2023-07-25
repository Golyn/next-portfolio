import Image from 'next/image';
import backend from '../public/backend.png';
import websit from '../public/Websit.png';
import travello from '../public/travello.png';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className=" dark:text-white py-10 my-10">
      <h1 className="text-3xl border-l-4 border-teal-500 pl-5 mb-6 py-1">
        Blog Page
      </h1>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 ">
          <Link
            href="https://medium.com/backenders-club/how-to-become-a-backend-developer-21998340dfe5"
            target="_blank"
          >
            <Image
              src={backend}
              alt="backend image file"
              className="rounded-lg object-cover"
              width={'100%'}
              height={'100%'}
              layout="responsive"
            />
            <h1 className="font-bold">How to Become a backend Developer</h1>
            <p>
              We are surrounded by lots of software products or applications on
              our phones and computers that we do use for various activities
              from social interaction to financial transactions without even
              knowing what goes into...
            </p>
          </Link>
        </div>
        {/* <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={websit}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
