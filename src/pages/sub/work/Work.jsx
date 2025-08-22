import AceDemo from "./aceDemo/AceDemo";
import ARCards from "./arCards/ARCards";
import Cardosseum from "./cardosseum/Cardosseum";
import Crazy8 from "./crazy8/Crazy8";
import GoSwim from "./goSwim/GoSwim";
import HeartOfTheJungle from "./heartOfTheJungle/HeartOfTheJungle";
import UnleashedLove from "./unleashedLove/UnleashedLove";

import BackToTopButton from "../../../components/backToTopButton/BackToTopButton";
import { useParams } from "react-router-dom";

const Work = () => {
  const { name } = useParams();
  const fetchContent = () => {
    switch (name) {
      case "acedemo":
        return <AceDemo />;
      case "goswim":
        return <GoSwim />;
      case "arcards":
        return <ARCards />;
      case "heartofthejungle":
        return <HeartOfTheJungle />;
      case "crazy8":
        return <Crazy8 />;
      case "unleashedlove":
        return <UnleashedLove />;
      case "cardosseum":
        return <Cardosseum />;
      default:
        return <NoContent />;
    }
  };

  return (
    <>
      {fetchContent()}
      <BackToTopButton />
    </>
  );
};

export default Work;
