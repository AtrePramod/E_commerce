import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/" component={HomeScreen} exact /> */}


      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
