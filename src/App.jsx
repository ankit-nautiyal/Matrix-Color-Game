import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameInfo from "./components/gameInfo";
import "./App.css";
import Matrix from "./components/matrix";

function App() {


  return (
    <>
        <Router>
            <Routes>
                <Route path="/gameInfo" element={<GameInfo />} />
                <Route path="/" element={<Matrix />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;