import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles"

function App() {
  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      App File
    </ThemeProvider>


  </>

}

export default App;

