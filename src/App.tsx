import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, LogIn, Register, Detail } from "./pages";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristRouteId" component={Detail} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
