import Image from 'next/image';
import Link from 'next/link';
import jsdocu2 from '../public/jsdocu2.png';
import hire from '../public/hire.png';
import bento from '../public/Bento.png';
import websit from '../public/Websit.png';
import travello from '../public/travello.png';
import quote from '../public/quote.png';
import blog from '../public/blog.png';

const Portfolio = () => {
  return (
    <section className="py-10">
      <div id="portfolio">
        <h3 className="text-3xl py-1 dark:text-white border-l-4 border-teal-500 pl-5 mb-6">
          Portofolio
        </h3>
        <p className="text-xl  py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-xl  py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Link href="https://seth-blog-post.netlify.app/" target="_blank">
            <Image
              src={blog}
              alt="ima"
              className="rounded-lg object-cover"
              width={'100%'}
              height={'100%'}
              layout="responsive"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1">
          <Link
            href="https://seth-random-quote-machine.netlify.app/"
            target="_blank"
          >
            <Image
              className="rounded-lg object-cover"
              src={quote}
              alt="imag"
              width={'100%'}
              height={'100%'}
              layout="responsive"
            />
          </Link>
        </div>
        <div className="basis-1/3 flex-1 ">
          <Link href="https://codepen.io/bronsted/pen/yLpywEx" target="_blank">
            <Image
              src={jsdocu2}
              alt="ima"
              className="rounded-lg object-cover"
              width={'100%'}
              height={'100%'}
              layout="responsive"
            />
          </Link>
        </div>

        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            src={travello}
            alt="image "
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={hire}
            alt="image file"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            src={bento}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            alt="image file"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            src={hire}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            alt="image file"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            src={websit}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            alt="image file"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
