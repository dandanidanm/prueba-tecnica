import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "../router/PrivateRouter";
import { PublicRoute } from "../router/PublicRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import { firebase } from "../firebase/firebase-config";
import Header from "../components/Header"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import CardRisotto from "../components/CardRisotto";



const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch,setChecking]);
  if (checking) {
    return <h1>cargando..</h1>;
  }
  return (
      <Router>
        <div className="text-center">
          <Header />
        </div>
        <Switch>

          <PublicRoute
            exact
            path="/auth/login"
            component={Login}
            isAuthenticated={isLoggedIn}
          />
          <PublicRoute
            exact
            path="/auth/register"
            component={Register}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/recetario"
            component={CardRisotto}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
   
  );
};

export default AppRouter;
