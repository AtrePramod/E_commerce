import "./App.css";
import About from "./components/about";
import Contact from "./components/Contact";
import ToolBar from "./components/toolbar";
import Policy from "./components/Policy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CardScreen from "./screens/cardScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScrren from "./screens/OrderScrren";
import AdminScreen from "./screens/AdminScreen";


function App() {
  return (
    <BrowserRouter>
      <ToolBar />
      <NavBar />
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScrren} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/cart" component={CardScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
