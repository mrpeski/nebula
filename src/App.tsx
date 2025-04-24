import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="*" element={<Blank />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
