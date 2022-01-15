import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { AuthContext } from "./context/AuthContext";

function App() {
  // const alles = useContext(AuthContext);
  // console.log(alles);
  const { auth: { isAuth } } = useContext(AuthContext);
  // console.log(isAuth.user.email);
  return (
    <>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            {isAuth ? <Profile /> : <Redirect to="/signin"/>}
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
