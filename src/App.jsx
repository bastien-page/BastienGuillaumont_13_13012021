import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Error from "./views/Error";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import { getUser } from "./actions/user.actions";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token != null) {
      dispatch(getUser(token));
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
