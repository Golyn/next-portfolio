import Head from 'next/head';
import { UserContext } from '../pages/_app';
import { useContext } from 'react';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import '../styles/Home.module.css';
export default function Home() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <About />
          <Services />
          <Portfolio />
        </main>
      </div>
    </>
  );
}
