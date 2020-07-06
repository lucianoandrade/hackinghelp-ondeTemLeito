/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
  TypeOfUser,
  Home,
  SignIn,
  Register,
} from "./";
import { Layout, Header, Footer } from "../components/modules";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Switch>
          {/* <Footer /> */}
          footer /* PLOP_INJECT_ROUTE */
          <Route exact path="/type-of-user" component={TypeOfUser} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cadastro/:type" component={Register} />
        </Switch>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
