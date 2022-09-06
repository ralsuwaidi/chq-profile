import "./App.css";
import EditPage from "./pages/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from "./pages/Display";
import { AxiosInstanceProvider } from "./context/UserContext";
import AuthContext from "./context/AuthProvider";

function App() {
  return (
    <div className="font-sans ">
      <Router>
        <AxiosInstanceProvider config={{ baseURL: "https://reqres.in/api/" }}>
          <Routes>
            <Route exact path="/" element={<EditPage />} />
            <Route exact path="/user" element={<Display />} />
          </Routes>
        </AxiosInstanceProvider>
      </Router>
    </div>
  );
}

export default App;
