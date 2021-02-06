import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Contacto from "./Components/Contacto";
const Rutas = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios" component={Users} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default Rutas;
