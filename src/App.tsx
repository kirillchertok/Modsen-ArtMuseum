import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./global.scss";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
