import React, { useEffect } from "react";
import "../assets/bootstrap.min.css";
import "../assets/dashboard.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Dashboard2 from "./Dashboard2";
import DashboardMem from "./DashboardMem";
import DashboardMem2 from "./DashboardMem2";
import Create from "./Create";
import { confirmCheck } from "../redux/ActionCreators";
import Firestore from "./Firestore";

const mapStateToProps = (state) => {
  return {
    // confirmCheck: state.confirmCheck,
    actions: state.confirmCheck,
  };
};

const mapDispatchToProps = (dispatch) => ({
  confirmCheck: (id) => dispatch(confirmCheck(id)),
});

function Main(props) {
  // useEffect(() => {
  //   const callBackendAPI = async () => {
  //     const res = await fetch("/express");
  //     const body = await res.json();

  //     if (res.status !== 200) {
  //       throw Error(body.message);
  //     }
  //     return body;
  //   };

  //   callBackendAPI();
  //   console.log("call backend API");
  // });

  return (
    <>
      <Header />
      <Nav />
      <div className="container-fluid" style={{ height: "80vh" }}>
        <Switch>
          <Route exact path="/">
            {/* <Dashboard /> */}
            <Firestore
              confirmCheck={props.confirmCheck}
              actions={props.actions}
            />
          </Route>
          <Route path="/dashboard-mgm">
            <Dashboard />
          </Route>
          <Route path="/dashboard-mem">
            <DashboardMem
              confirmCheck={props.confirmCheck}
              actions={props.actions}
            />
          </Route>
          <Route path="/dashboard-mgm2">
            <Dashboard2 />
          </Route>
          <Route path="/dashboard-mem2">
            <DashboardMem2 />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// export default Main;
