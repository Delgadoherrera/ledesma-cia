import { IonContent } from "@ionic/react";
import StockNav from "./navMenus/StockNav";
import { component } from "../features/dataReducer/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import CargaMateriales from "./gestiones/CargaMateriales";
import { useEffect, useState } from "react";
import CatalogoMateriales from "./tabs/CatalogoMateriales";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({}) => {
  const [tabSelected, setTabSelected] = useState("");

  useEffect(() => {
    console.log("tab selected", tabSelected);
  }, [tabSelected]);

  return (
    <>
      <StockNav tabSelected={setTabSelected} />

      {tabSelected === "catalogo de materiales" && <CatalogoMateriales />}
      
    </>
  );
};

export default ExploreContainer;
