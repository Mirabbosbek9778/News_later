import BoxBody from "../components/body/boxBody/Boxbody"; // Import BoxBody directly
import GenericCards from "../components/generic/genericCard/GenericCards"; // Import GenericCards directly
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
      <GenericCards />
      <LineHight />
      <General />
      <LineHight />
      <Description />
      <LineHight />
      <Media />
      <LineHight />
      <BrandCarusel />
      <LineHight />
      <Footer />
      <LineHight />
    </div>
  );
};

export default App;
