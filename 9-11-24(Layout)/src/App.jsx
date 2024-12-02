import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import AboutCompany from "./AboutCompany";
import AboutServices from "./AboutService";
import AboutProduct from "./AboutProduct";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route
                path="aboutCompany"
                element={<AboutCompany></AboutCompany>}
              />
              <Route
                path="aboutServices"
                element={<AboutServices></AboutServices>}
              />
              <Route
                path="aboutProduct"
                element={<AboutProduct></AboutProduct>}
              />
            </Route>
            <Route path="contact" element={<Contact></Contact>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
