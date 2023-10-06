import BoxBody from "../components/body/boxBody/Boxbody";
import GenericCards from "../components/generic/genericCard/GenericCards";
import Header from "../components/header/Header";
import LineHight from "../components/line/LineHeight";
import Film from "../components/priview/Film";
import Carusel from "../components/swiper/Carusel";
import FilterCarusel from "../components/swiper/filterCarusel/FilterCarusel";
import GeneralBody from "../components/body/generalBody/GeneralBody";
import General from "../components/swiper/general/General";
import Description from "../components/description/Description";
import Media from "../components/media/Media";
import BrandCarusel from "../components/brandCarusel/BrandCarusel";
import Footer from "../components/footer/Footer";
import Persons from "../components/persons/Persons";
import ProgramCard from "../components/generic/programCard/ProgramCard";

const App = () => {
  return (
    <div>
      <Header />
      <GeneralBody />
      <LineHight />
      <BoxBody />
      <LineHight />
      <Carusel />
      <LineHight />
      <Film />
      <LineHight />
      <FilterCarusel />
      <LineHight />
      <General />
      <LineHight />
      <ProgramCard />
      <LineHight />
      <Media />
      <LineHight />
      <GenericCards />
      <LineHight />
      <Persons />
      <LineHight />
      <Description />
      <LineHight />
      <BrandCarusel />
      <LineHight />
      <Footer />
      <LineHight />
    </div>
  );
};

export default App;
