import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup"
import PickRecipes from "./components/pages/PickRecipes"
import Home from "./components/pages/Home"
import BrowseMeals from "./components/pages/BrowseMeals"
import {loadMealData} from "./components/get_recipes"
import {loadMapData} from "./components/get_stores"

export default function App() {
  /*loadMapData(-79.396505, 43.659862, 3000, (data) => {
    console.log(data);
  });*/  

  return (
  <>
   <Router> 
   <Navbar />
     <Switch>  
      
     <Route path = '/signup' exact component = {Signup} />
     <Route path = '/browsemeals' exact component = {BrowseMeals} />
     <Route path = '/pickrecipes' exact component = {PickRecipes}/>
     <Route path = '/' exact component = {Home}/>
     </Switch>  
  
   </Router>
     

   </>
  );
}















