import logo from './logo.svg';
import './App.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from './Components/NavBar';
import About from './Components/About';
import AboutHero from './Components/AboutHero';
import AboutText from './Components/AboutText';
import Product from './Components/Product';
import ProductPhoto from './Components/ProductPhoto';
import Services from './Components/Services';
import ServicesText from './Components/ServicesText';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
       <AboutHero />
      <AboutText />
      <Product />
      <ProductPhoto />
      <Services />
      <ServicesText />
      <Footer />
     
    </div>
  );
}

export default App;
