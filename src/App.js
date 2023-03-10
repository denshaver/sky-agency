import Header from "./components/header-block/Header";
import CaseServices from "./components/case-servises-block/CaseServices";
import Callback from "./components/callback-block/Callback";

function App() {
  return (
    <div className="container">
      <Header />
      <CaseServices />
      <Callback />
    </div>
  );
}

export default App;
