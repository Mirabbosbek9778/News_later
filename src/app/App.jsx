import Header from "../components/header/Header";
import BoxBody from "../components/body/boxBody/Boxbody";
import LineHight from "../components/line/LineHeight";
import Carusel from "../components/swiper/Carusel";
import Film from "../components/priview/Film";
import FilterCarusel from "../components/swiper/filterCarusel/FilterCarusel";
import GenericCards from "../components/generic/genericCard/GenericCards";
import Root from "./root";
const App = () => {
  return (
    <div>
      <Header />
      <Root />
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
