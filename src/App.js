import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import EditPage from "./pages/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-sans ">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<EditPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
