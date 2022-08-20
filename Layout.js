import Footer from "./Footer"
import Form from "./Form";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <div className="header">
        <h1>Alok's PG</h1>
      </div>
      <Navbar />
      <Form/>      
      { children }
      <Jumbotron/>
      <Footer />
    </div>
  );
}
 
export default Layout;