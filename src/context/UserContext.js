import axios from "axios";
import { createContext, useEffect, useRef } from "react";


export const AxiosContext = createContext(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const instanceRef = useRef(axios.create(config));

  useEffect(() => {
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(interceptor);
    });

    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  );
};
