import code from '../public/code.png';
// import design from '../public/design.png';
import consulting from '../public/consulting.png';
import designing from '../public/designing.png';
import designs from '../public/designs.png';
import des from '../public/des.png';
import codes from '../public/codes.png';
import bus from '../public/bus.png';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <section>
        <div id="services">
          <h3 className="text-3xl dark:text-white border-l-4 border-teal-500 pl-5 mb-6 py-1">
            Services
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
        <div className="lg:flex gap-10">
          <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image
              src={des}
              width={100}
              height={100}
              // style={{ margin: '0px auto' }}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">Web Design</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={codes} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Development</h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600">Developing Tools I Use</h4>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">Python</p>
            <p className="text-gray-800 py-1">Nodejs</p>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">C++</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={bus} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Online Presence</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Consulting Tools I Use</h4>
            <p className="text-gray-800 py-1">Benchmarking</p>
            <p className="text-gray-800 py-1">Balanced Scorecard</p>
            <p className="text-gray-800 py-1">Porter’s Five Forces</p>
            <p className="text-gray-800 py-1">Core Competencies</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
