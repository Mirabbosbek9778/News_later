import BrandCarusel from "../components/brandCarusel/BrandCarusel";
import Description from "../components/description/Description";
import Footer from "../components/footer/Footer";
import Media from "../components/media/Media";
import General from "../components/swiper/general/General";
import {
  Header,
  LineHight,
  BoxBody,
  Carusel,
  Film,
  FilterCarusel,
  GenericCards,
  ConBox,
} from "./allImports/AllImports";

const App = () => {
  return (
    <div>
      <Header />
      <ConBox />
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
    </div>
  );
};

export default App;
