import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import logo from "../assets/Royeal_Dee_Codes.png";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img
          src={logo}
          alt="Royeal Dee Codes Logo"
          className="home-page-image"
        />

        <IonCard className="custom-border">
          <IonCardContent className="home-content-container">
            <h1>Welcome to Ionic React App</h1>
            <p>
              This app showcases different Ionic components with custom styling.
              <br />
              Use the tabs to navigate between pages.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
