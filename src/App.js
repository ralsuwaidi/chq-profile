import "./App.css";
import { AuthProvider } from "./components/Context/AuthProvider";
import EditPage from "./pages/EditPage/EditPage";
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
