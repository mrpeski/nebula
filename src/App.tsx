import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Blank = React.lazy(() => import("./pages/Blank"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
