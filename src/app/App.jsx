import Header from "../components/header/Header";
import BoxBody from "../components/body/boxBody/Boxbody";
import Body from "../components/body/conBody/ConBox";
import LineHight from "../components/line/LineHeight";
import Carusel from "../components/swiper/Carusel";
import Film from "../components/priview/Film";
import FilterCarusel from "../components/swiper/filterCarusel/FilterCarusel";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <LineHight />
      <BoxBody />
      <LineHight />
      <Carusel />
      <LineHight />
      <Film />
      <FilterCarusel />
    </div>
  );
};

export default App;
