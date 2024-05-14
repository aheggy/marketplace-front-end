// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./Components/NavBar";

//PAGES
import Index from "./Pages/Index";

function App() {

  return (
    <div className="market-place-app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
