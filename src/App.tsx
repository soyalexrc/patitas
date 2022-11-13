import {useEffect, useState} from 'react';
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import ScrollToTop from "./shared/components/ScrollToTop";
import Router from "./routes";
import SplashScreen from "@/shared/components/SplashScreen";
// import {SnackbarProvider} from 'notistack'

function App() {
  const [component, setComponent] = useState(<SplashScreen />)
  useEffect(() => {
    setTimeout(() => {
    setComponent(<Router />)
  }, 4000)
}, [])

  return (
    <ThemeConfig>
      <GlobalStyles />
      <ScrollToTop />
      {/*<SnackbarProvider preventDuplicate maxSnack={4}  autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>*/}
        {component}
      {/*</SnackbarProvider>*/}
    </ThemeConfig>
  );
}

export default App;
