import Image from 'next/image';
import Link from 'next/link';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
// import web4 from '../public/web4.png';
// import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import JStech from '../public/JStech.png';
import jsdocu2 from '../public/jsdocu2.png';

import hire from '../public/hire.png';
import bento from '../public/Bento.png';
import websit from '../public/Websit.png';
import travello from '../public/travello.png';

const Portfolio = () => {
  return (
    <section className="py-10">
      <div id="portfolio">
        <h3 className="text-3xl py-1 dark:text-white border-l-4 border-teal-500 pl-5 mb-6">
          Portofolio
        </h3>
        <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Link href="https://codepen.io/bronsted/pen/yLpywEx" target="_blank">
            <Image
              className="rounded-lg object-cover"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              src={jsdocu2}
            />
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
            src={travello}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={hire}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={bento}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={websit}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
