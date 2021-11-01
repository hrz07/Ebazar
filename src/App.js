import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Product from "./components/Product";
import About from "./components/About";
import { Switch, Route, Redirect,NavLink } from 'react-router-dom'


function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route to='/' component={Home} />
        <Route to='/product' component={Product} />
        <Route to='/about' component={About} />
        <Route to='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
