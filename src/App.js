import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup"
import PickRecipes from "./components/pages/PickRecipes"
import Home from "./components/pages/Home"
import BrowseMeals from "./components/pages/BrowseMeals"
import {loadData} from "./components/get_recipes"

export default function App() {
  loadData("chicken", null, null, null, null, (data) => {
    console.log(data);
  });

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
