import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import { css } from "@emotion/react";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const cardStyle = css`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const cardContentStyle = css`
  flex-grow: 1;
`;

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "danger",
  "light",
  "mediumn",
  "dark",
];

function Card() {
  return (
    <>
      <IonPage>
        <IonContent>
          <div css={gridStyle}>
            {colors.map((color, index) => (
              <IonCard key={index} color={color} css={cardStyle}>
                <IonCardHeader>
                  <IonCardTitle>Card Title</IonCardTitle>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent css={cardContentStyle}>
                  Card Content
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Card;
