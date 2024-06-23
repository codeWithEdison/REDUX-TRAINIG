import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import LoginForm from "./components/forms/LoginForm";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import UserUpdate from "./components/forms/UserUpdate";
import { useSelector } from "react-redux";
import Header from "./components/Header";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));  
  // const user = useSelector((state) => state.auth.user?.data?.user); 
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Header/> 
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/update-user"
            element={
              <PrivateRoute>
                <UserUpdate /> 
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
