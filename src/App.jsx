import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { list, card, create, home, alert, arrowDown } from "ionicons/icons";

import Home from "./pages/Home";
import List from "./pages/List";
import Card from "./pages/Card";
import Form from "./pages/Form";
import Alert from "./pages/Alert";
import Accordian from "./pages/Accordian";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/alert">
            <Alert />
          </Route>
          <Route path="/accordian">
            <Accordian />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list" href="/list">
            <IonIcon icon={list} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="card" href="/card">
            <IonIcon icon={card} />
            <IonLabel>Card</IonLabel>
          </IonTabButton>
          <IonTabButton tab="form" href="/form">
            <IonIcon icon={create} />
            <IonLabel>Form</IonLabel>
          </IonTabButton>
          <IonTabButton tab="alert" href="/alert">
            <IonIcon icon={alert} />
            <IonLabel>Alert</IonLabel>
          </IonTabButton>
          <IonTabButton tab="accordian" href="/accordian">
            <IonIcon icon={arrowDown} />
            <IonLabel>Accordian</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
