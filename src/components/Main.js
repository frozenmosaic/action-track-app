import React from "react";
import "../assets/bootstrap.min.css";
import "../assets/dashboard.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Dashboard2 from "./Dashboard2";
import DashboardMem from "./DashboardMem";
import DashboardMem2 from "./DashboardMem2";
import Background from "./Background";
import Create from "./Create";

function Main(props) {
  return (
    <>
      <Header />
      <Nav />
      <div class="container-fluid" style={{ height: "80vh" }}>
        <Switch>
          <Route exact path="/">
            <DashboardMem />
          </Route>
          <Route path="/background">
            <Background />
          </Route>
          <Route path="/dashboard">
            <DashboardMem />
          </Route>
          <Route path="/dashboard2">
            <DashboardMem2 />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/dashboard-mgm">
            <Dashboard />
          </Route>
          <Route path="/dashboard-mgm2">
            <Dashboard2 />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default Main;
