import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import LoginPage from "./LoginPage";
import CardPage from "./CardPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";
import { appRoutes } from "../lib/appRouts";
import ExitPage from "./ExitPage";
import PopNewCard from "../components/PopNewCard/PopNewCard.jsx";

function AppHome() {
  
    return (
      <Routes>
        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={appRoutes.CARD} element={<CardPage />} />
            <Route path={appRoutes.NEW_CARD} element={<PopNewCard />} />
            <Route path={appRoutes.EXIT} element={<ExitPage />} /> 
          </Route>
        </Route>
  
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    );
  }
  
  export default AppHome;