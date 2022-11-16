import Image from 'next/image';
// import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
// import web3 from '../public/web3.png';
// import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import backend from '../public/backend.png';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className=" dark:text-white">
      <h1 className="font-extrabold border-l-4 border-teal-500 pl-5 mb-6 py-1">
        Blog Page
      </h1>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
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
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web2}
          />
        </div>

        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web6}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
