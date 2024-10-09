import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Productinfo from "./components/Productinfo";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/product/:id" component={Productinfo} exact /> */}
        {/* <Route path="/login" component={Login} exact /> */}
        {/* <Route path="/register" component={Register} exact /> */}


      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
