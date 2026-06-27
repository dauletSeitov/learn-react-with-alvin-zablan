import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/auth/SignInPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { useState } from "react";
import { PlantShowPage } from "pages/PlantShowPage";
import SessionContext from "context/SessionContext";
import {
  getSessionTokenStorage,
  removeSessionTokenStorage,
  setSessionTokenStorage,
} from "services/user";
import { jwtDecode } from "jwt-decode";
import { PlantListPage } from "pages/PlantListPage";
import { ScrollToTop } from "shared-components/ScrollToTop";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() => {
    return getSessionTokenStorage();
  });

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          setSessionToken(token);
          setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/plants" element={<PlantListPage />} />
          <Route path="/plants/:plantId" element={<PlantShowPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
