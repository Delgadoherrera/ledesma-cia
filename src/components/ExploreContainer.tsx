import { IonContent } from "@ionic/react";
import "./ExploreContainer.css";
import Stock from "./Stock";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  switch (name) {
    case "Stock":
      return (
        <IonContent>
          <Stock name={"stock"} />
        </IonContent>
      );
      break;

    default:
      break;
  }
};

export default ExploreContainer;
