import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemDivider,
  IonButton,
  IonRadioGroup,
  IonList,
  IonCard,
  IonCardContent,
} from "@ionic/react";

const Form = () => {
  const [name, setName] = useState("");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", {
      name,
      toggleChecked,
      selectedFruit,
      termsAccepted,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="center-content">
          <IonCard className="centered-card">
            <IonCardContent>
              <form onSubmit={handleSubmit}>
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput
                      value={name}
                      onIonChange={(e) => setName(e.detail.value)}
                      placeholder="Enter your name"
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel>Toggle</IonLabel>
                    <IonToggle
                      checked={toggleChecked}
                      onIonChange={(e) => setToggleChecked(e.detail.checked)}
                    />
                  </IonItem>

                  <IonRadioGroup
                    value={selectedFruit}
                    onIonChange={(e) => setSelectedFruit(e.detail.value)}
                  >
                    <IonItemDivider>
                      <IonLabel>Your favorite fruit</IonLabel>
                    </IonItemDivider>

                    <IonItem>
                      <IonLabel>Apple</IonLabel>
                      <IonRadio value="apple" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Banana</IonLabel>
                      <IonRadio value="banana" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Cherry</IonLabel>
                      <IonRadio value="cherry" />
                    </IonItem>
                  </IonRadioGroup>

                  <IonItem>
                    <IonLabel>I agree to terms</IonLabel>
                    <IonCheckbox
                      checked={termsAccepted}
                      onIonChange={(e) => setTermsAccepted(e.detail.checked)}
                    />
                  </IonItem>
                </IonList>

                <IonButton
                  expand="block"
                  type="submit"
                  className="ion-margin-top"
                >
                  Submit
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Form;
