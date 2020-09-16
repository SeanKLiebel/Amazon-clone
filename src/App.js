import React, { useEffect } from 'react';
import Login from './Login';
import Header from './Header';
import Checkout from './Checkout';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

   // useEffect 
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

  return () => {
    // Any changes go in here...
    unsubscribe();
  };
}, [dispatch]);

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* This is the default route */}
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
    </div>
   </Router>
  );
}


export default App;
