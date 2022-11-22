import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components:
import Home from "./Components/Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
