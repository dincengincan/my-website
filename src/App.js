import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { UserProvider } from "./context/UserContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <LanguageProvider>
            <Navbar />
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </LanguageProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
