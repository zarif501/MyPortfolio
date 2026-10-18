import { BrowserRouter, Routes, Route } from "react-router";

import CursorBlob from "./components/CursorBlob/CursorBlob";
import NaBar from "./components/NavBar/NaBar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NaBar />
      <CursorBlob />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
