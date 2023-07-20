import { FC } from "react";
import "./body-container.scss";
import SideMenu from "./SideMenu/SideMenu";
import MainContent from "./MainContent/MainContent";
type BodyContainerProps = {
  //   user:any;
};

const BodyContainer: FC<BodyContainerProps> = () => {
  return (
    <div className="body-container">
      <SideMenu />
      <MainContent />
    </div>
  );
};

export default BodyContainer;
