import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Signup from "./components/pages/Signup"
import PickRecipes from "./components/pages/PickRecipes"
import Home from "./components/pages/Home"
import {loadData} from "./components/get_recipes"


export default function App() {
  loadData("chicken", null, null, null, null, (data) => {
    console.log(data);
  });

  return (
  <>
   <Router> 
     <Switch>  
      
     <Route path = '/signup' exact component = {Signup} />
     <Route path = '/pickrecipes' exact component = {PickRecipes}/>
     <Route path = '/home' exact component = {Home}/>
     </Switch>  
  
   </Router>
     

   </>
  );
}









