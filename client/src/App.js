import "./App.css";

//used components
import Login from "./Components/Registration/Login/Login";
import SignUp from "./Components/Registration/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
// import Stories from "./Components/Stories/Stories";
import StoriesBar from "./Components/Stories/StoriesBar";
import ViewStory from "./Components/Stories/ViewStory";

/* ============ import react router ================= */
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/stotries" element={<StoriesBar />} />
        <Route path="/BigView" element={<ViewStory />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
