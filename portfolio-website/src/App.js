import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import ProjectPage from "./components/ProjectPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

      {/* For Framer-motion animation on Page Change */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </AnimatePresence>

    </ThemeProvider>


  </>

}

export default App;

