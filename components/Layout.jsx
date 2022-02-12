import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      { children }
    </div>
  );
}
 
export default Layout;