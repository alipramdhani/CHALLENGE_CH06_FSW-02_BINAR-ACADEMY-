import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Cars from "./pages/Cars";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* "/" Routing to landing page */}
        <Route path="/" element={<LandingPage />} />
        {/*  "/cars" Routing to cars page  */}
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
