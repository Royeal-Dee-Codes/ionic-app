import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonIcon,
  IonNote,
} from "@ionic/react";
import { trash, archive, heart } from "ionicons/icons";

const List = () => {
  const handleDelete = (item) => {
    console.log(`Delete clicked for ${item}`);
  };

  const handleArchive = (item) => {
    console.log(`Archive clicked for ${item}`);
  };

  const handleFavorite = (item) => {
    console.log(`Favorite clicked for ${item}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {[
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
            "Item 6",
            "Item 7",
            "Item 8",
            "Item 9",
            "Item 10",
            "Item 11",
            "Item 12",
            "Item 13",
            "Item 14",
            "Item 15",
            "Item 16",
            "Item 17",
            "Item 18",
            "Item 19",
            "Item 20",
          ].map((item, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>{item}</IonLabel>
                <IonNote slot="end">Swipe left</IonNote>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  onClick={() => handleDelete(item)}
                >
                  <IonIcon slot="icon-only" icon={trash} />
                </IonItemOption>
                <IonItemOption
                  color="warning"
                  onClick={() => handleArchive(item)}
                >
                  <IonIcon slot="icon-only" icon={archive} />
                </IonItemOption>
                <IonItemOption
                  color="success"
                  onClick={() => handleFavorite(item)}
                >
                  <IonIcon slot="icon-only" icon={heart} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default List;
