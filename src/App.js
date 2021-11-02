import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Product from "./components/Product";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { Switch, Route, Redirect,NavLink } from 'react-router-dom'


function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
