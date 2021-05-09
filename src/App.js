import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup"
import PickRecipes from "./components/pages/PickRecipes"
import Home from "./components/pages/Home"
import BrowseMeals from "./components/pages/BrowseMeals"

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/browsemeals" exact component={BrowseMeals} />
          <Route path="/pickrecipes" exact component={PickRecipes} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}
