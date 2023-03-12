import Header from "./components/header-block/Header";
import CaseServices from "./components/case-servises-block/CaseServices";
import Callback from "./components/callback-block/Callback";
import Steps from "./components/steps-block/Steps";
import Reviews from "./components/reviews-block/Reviews";

function App() {
  return (
    <div className="container">
      <Header />
      <CaseServices />
      <Callback />
      <Steps />
      <Reviews />
    </div>
  );
}

export default App;
