import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import EditPage from "./pages/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from "./pages/Display";
import { AxiosInstanceProvider } from "./context/UserContext";

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
