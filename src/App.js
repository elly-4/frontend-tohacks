import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Signup from "./components/pages/Signup"


export default function App() {
  return (
    <>
      <Router> 
        <Switch>  
        <Route path = '/signup' exact component = {Signup} />
        </Switch>  
      </Router>
    </>
  );
}
