import Header from "./components/header-block/Header";
import CaseServices from "./components/case-servises-block/CaseServices";
import Callback from "./components/callback-block/Callback";
import Steps from "./components/steps-block/Steps";
// import Reviews from "./components/reviews-block/Reviews";
import Brands from "./components/brands-block/Brands";
import Crew from "./components/crew-block/Crew";
import Form from "./components/form-block/Form";
import SideNav from "./components/sidenav-block/SideNav";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer-block/Footer";

function App() {
  const [sideNavWidth, setSideNavWidth] = useState(false);

  return (
    <div className="container">
      <SideNav sideNavWidth={sideNavWidth} setSideNavWidth={setSideNavWidth} />
      <Header setSideNavWidth={setSideNavWidth} />
      <CaseServices />
      <Callback />
      <Steps />
      {/* <Reviews /> */}
      <Brands />
      <Crew />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
