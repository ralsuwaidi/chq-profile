import axios from "axios";
import { createContext, useEffect, useRef, useState, useMemo } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router";

export const AxiosContext = createContext(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
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

  const instance = useMemo(() => {
    return AxiosContext || axios;
  }, [AxiosContext]);

  let navigate = useNavigate();

  let editUser = async (e) => {
    e.preventDefault();
    console.log(">> ", config.baseURL);
    const response = await fetch(config.baseURL, {
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

  const instanceRef = useRef(axios.create(config));

  useEffect(() => {
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(interceptor);
    });

    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  let contextData = {
    contextInstance: instanceRef.current,
    user: user,
    editUser: editUser,
  };

  return (
    <AxiosContext.Provider value={contextData}>
      {children}
    </AxiosContext.Provider>
  );
};
