import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./views/Error";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
