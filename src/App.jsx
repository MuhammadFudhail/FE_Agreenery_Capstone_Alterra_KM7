import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <h1>Ini dari branch feature login register</h1>
    <h1>Ini dari branch feature/landing-page</h1>
    <h1>Ini dari branch feature/chatbot</h1>
    <Router>
      {/* Navbar Taruh di Apps <Navbar/> */}
      <Routes>
      </Routes>
    </Router>
    </>
  );
}

export default App;
