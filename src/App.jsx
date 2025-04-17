import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      </Provider>
  );
} 

export default App;
