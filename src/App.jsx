import { Route, Routes } from "react-router-dom";
import { default as RaniContainer } from "./pages/rani/Container";
import { default as KamilContainer } from "./pages/kamil/Container";
import Chooser from "./pages/Chooser";
import Login from "./pages/kamil/Login";
import Index from "./pages/kamil/Index";
import Dashboard from "./pages/kamil/Dashboard";
import AllTries from "./pages/kamil/AllTries";
import AllTexts from "./pages/kamil/AllTexts";
function App() {
  return (
    <div className={`h-screen w-full`}>
      <Routes>
        <Route path="/" element={<Chooser />}></Route>
        <Route path="/rani" element={<RaniContainer />}></Route>
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
