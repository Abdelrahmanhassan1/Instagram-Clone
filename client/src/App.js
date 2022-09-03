import "./App.css";

//used components
import Login from "./Components/Registration/Login/Login";
import SignUp from "./Components/Registration/SignUp/SignUp";

/* ============ import react router ================= */
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
