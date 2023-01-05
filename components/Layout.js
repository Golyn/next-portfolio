import Footer from './Footer';
import Navbar from './Navbar';
import { UserContext } from '../pages/_app';
import { useContext } from 'react';
const Layout = ({ children }) => {
  // const context = useContext(UserContext); or
  const { darkMode, setDarkMode } = useContext(UserContext); //destructured

  return (
    <div className="text-center mx-0 ">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />{' '}
      {/* ie. context.darkMode and context.setDarkMode*/}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
