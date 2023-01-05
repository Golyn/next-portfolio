import Layout from '../components/Layout';
import '../styles/globals.css';
import { createContext, useState } from 'react';

export const UserContext = createContext();
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="text-center mx-0">
        <div className={darkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white px-10 dark:bg-gray-900 md:px-20 mx-0 lg:px-40">
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
              <Component {...pageProps} />
            </Layout>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
