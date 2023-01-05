import Head from 'next/head';
import { UserContext } from '../pages/_app';
import { useContext } from 'react';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
export default function Home() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mx-0">
        <main>
          <About />
          <Services />
          <Portfolio />
        </main>
      </div>
    </>
  );
}
