import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = (props) => {
  // use local storage if exists if not then null
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  let navigate = useNavigate();

  let editUser = async (e) => {
    e.preventDefault();
    console.log(">> ", e.target.firstName.value);
    let response = await fetch("http://192.168.0.141:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastName: e.target.lastName.value,
      }),
    });

    let data = await response.json();
    console.log("data:", data);

    if (response.status == 200) {
      setAuthTokens(data);
      // decode the data and se the user with all data
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      console.log(authTokens);
      navigate("/success");
    } else {
      alert("Somthing went wrong!");
    }
  };

  let contextData = {
    user: user,
    editUser: editUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};
