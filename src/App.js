import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
