import { Route, Routes } from "react-router-dom";
import { default as RaniContainer } from "./pages/rani/Container";
import { default as KamilContainer } from "./pages/kamil/Container";
import Chooser from "./pages/Chooser";
import Login from "./pages/kamil/Login";
import Index from "./pages/kamil/Index";
import Dashboard from "./pages/kamil/Dashboard";
import AllTries from "./pages/kamil/AllTries";
import AllTexts from "./pages/kamil/AllTexts";
import Main from "./pages/rani/Main";
import SignUp from "./pages/rani/SignUp";
import ToLogin from "./pages/rani/ToLogin";
import AllOldTries from "./pages/rani/AllOldTries";
import NewText from "./Components/kamil/NewText";
import NewTexts from "./pages/rani/NewTexts";
import Body from "./Components/Rani/Body";
function App() {
  return (
    <div className={`h-screen w-full`}>
      <Routes>
        <Route path="/" element={<Chooser />}></Route>

        <Route path="/rani" element={<RaniContainer />}>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route index element={<ToLogin />}></Route>
          <Route path="main" element={<Main />}>
            <Route index element={<Body />}></Route>
            <Route path="alltries" element={<AllOldTries />}></Route>
            <Route path="newtexts" element={<NewTexts />}></Route>
          </Route>
        </Route>

        <Route path="/kamil" element={<KamilContainer />}>
          <Route path="login" element={<Login />} />
          <Route path="index" element={<Index />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="recent-tries" element={<AllTries />}></Route>
            <Route path="all-texts" element={<AllTexts />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
