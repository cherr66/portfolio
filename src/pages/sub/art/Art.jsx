import Illustration from "./illustration/Illustration";
import Photography from "./photography/Photography";
import NoContent from "../../../components/noContent/NoContent";
import BackToTopButton from "../../../components/backToTopButton/BackToTopButton";
import { useParams } from "react-router-dom";

const Art = () => {
  const { category } = useParams();

  const fetchContent = () => {
    switch (category) {
      case "illustration":
        return <Illustration />;
      case "photography":
        return <Photography />;
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

export default Art;
