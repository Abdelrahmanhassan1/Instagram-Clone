import "./App.css";

//used components
import Login from "./Components/Registration/Login/Login";
import SignUp from "./Components/Registration/SignUp/SignUp";

import Home from "./Components/Registration/Home/Home";
import StoriesBar from "./Components/Stories/StoriesBar";
import ViewStory from "./Components/Stories/ViewStory";

import Profile from "./Components/Profile/Profile";
/* ============ import react router ================= */
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/stories" element={<StoriesBar />} />
        <Route path="/BigView" element={<ViewStory />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
