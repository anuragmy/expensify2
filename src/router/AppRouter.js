import React from "react";
import AddExpence from "../components/AddExpence";
import EditExpence from "../components/EditExpence";
import Help from "../components/Help";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Header from "../components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/create" component={AddExpence} />
          <Route path="/edit" component={EditExpence} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
