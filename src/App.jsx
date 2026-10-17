import { BrowserRouter, Routes, Route } from "react-router";

import NaBar from "./components/NavBar/NaBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <NaBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
