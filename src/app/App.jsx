import Header from "../components/header/Header";
import BoxBody from "../components/body/boxBody/Boxbody";
import ConBox from "../components/body/conBody/ConBox";
import LineHight from "../components/line/LineHeight";
import Carusel from "../components/swiper/Carusel";
import Film from "../components/priview/Film";
import FilterCarusel from "../components/swiper/filterCarusel/FilterCarusel";
import GenericCards from "../components/generic/genericCard/GenericCards";
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
    </div>
  );
};

export default App;
