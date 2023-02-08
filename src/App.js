import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/MainComponent";
import About from "./Components/About/About";
import Special from "./Components/Special/Special";
import Community from "./Components/Community/Community";
import Heading from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="About" element={<About />} />
          <Route path="Special" element={<Special />} />
          <Route path="Community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
