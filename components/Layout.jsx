import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className="
      min-h-screen 
      m-0 
      p-0 
      box-border 
      bg-white 
      font-Nunito
      text-smooth-black
      "
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
