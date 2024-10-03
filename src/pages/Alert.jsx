import React from "react";
import { IonAlert, IonButton } from "@ionic/react";

function Alert() {
  const handleDismiss = (event) => {
    const selectedColor = event.detail.data.values;
    if (selectedColor) {
      console.log(`Selected color: ${selectedColor}`);
    } else {
      console.log("No color was selected");
    }
  };

  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Select your favorite color"
        buttons={["OK"]}
        inputs={[
          {
            label: "Red",
            type: "radio",
            value: "red",
          },
          {
            label: "Blue",
            type: "radio",
            value: "blue",
          },
          {
            label: "Green",
            type: "radio",
            value: "green",
          },
          {
            label: "Pink",
            type: "radio",
            value: "pink",
          },
          {
            label: "Rainbow",
            type: "radio",
            value: "rainbow",
          },
        ]}
        onDidDismiss={(event) => handleDismiss(event)}
      ></IonAlert>
    </>
  );
}
export default Alert;
