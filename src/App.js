import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Signup from "./components/pages/Signup"
import PickRecipes from "./components/pages/PickRecipes"
import Home from "./components/pages/Home"


export default function App() {
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









