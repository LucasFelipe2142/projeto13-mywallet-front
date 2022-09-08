import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Home from "./components/Home";
import New_entry from "./components/New_entry";
import New_exit from "./components/New_exit";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/novaentrada" element={<New_entry />} />
          <Route path="/novasaida" element={<New_exit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
