import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const index = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
