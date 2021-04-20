import { Route, Switch, BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
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
        <LanguageProvider>
          <I18nextProvider i18n={i18n}>
            <UserProvider>
              <Navbar />
              <Switch>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </UserProvider>
          </I18nextProvider>
          <Footer />
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
