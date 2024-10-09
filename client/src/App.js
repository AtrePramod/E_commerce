import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/" component={HomeScreen} exact /> */}


      </Switch>
    </BrowserRouter>
  );
}

export default App;
