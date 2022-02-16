import NavBar from "./NavBar";
import Footer from "./Footer";
import AppProvider from "./AppProvider";

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <div
        className="
      flex
      flex-col
      min-w-screen
      min-h-screen
      m-0 
      p-0
      max-w-screen
      bg-smooth-white
      dark:bg-smooth-black
      dark:text-light-grey
      font-Nunito
      text-smooth-black
      "
      >
        <NavBar />
        {children}
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Layout;
