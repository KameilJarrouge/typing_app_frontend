import { Route, Routes } from "react-router-dom";
import { default as RaniContainer } from "./pages/rani/Container";
import { default as KamilContainer } from "./pages/kamil/Container";
import Chooser from "./pages/Chooser";
import Login from "./pages/kamil/Login";
import Index from "./pages/kamil/Index";
function App() {
  return (
    <div className={`h-screen w-full`}>
      <Routes>
        <Route path="/" element={<Chooser />}></Route>
        <Route path="/rani" element={<RaniContainer />}></Route>
        <Route path="/kamil" element={<KamilContainer />}>
          <Route path="login" element={<Login />} />
          <Route path="index" element={<Index />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
