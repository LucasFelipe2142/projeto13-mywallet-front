import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
