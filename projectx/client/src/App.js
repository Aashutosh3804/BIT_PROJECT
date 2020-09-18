import React,{useContext} from 'react';
import './App.css';
import ResLog from './components/ResLog/ResLog';
import {AuthContext} from'./context/auth';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
const {state} = useContext(AuthContext);
  return (
    <Router>
    <Route path="/login" component={ResLog}/>

      {state.isLoggedIn?<Switch>
      <Route path="/" exact component={Home}/>
      

      </Switch>:
      <Redirect to="/login" />}
     
    
    </Router>
  );
}

export default App;
