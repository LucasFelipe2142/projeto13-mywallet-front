//import axios from 'axios';
import styled from "styled-components";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container>
      <h1>MyWallet</h1>
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        disabled={false}
        type="Email"
        name="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        disabled={false}
        type="password"
        name="input"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        disabled={false}
        type="password"
        name="input"
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button onClick={() => registrate()}>Cadastrar</Button>

      <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
    </Container>
  );

  function registrate() {
    if (password === confirmPassword) {
      axios
        .post("http://localhost:5000/cadastro", {
          name: name,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("cadastro efetuado");
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else alert("senhas não conicidem");
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;

    color: #ffffff;
    margin-bottom: 24px;
  }
  input {
    width: 326px;
    height: 58px;
    left: 25px;
    top: 233px;

    border: 1px solid #d5d5d5;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    outline: none;

    padding-left: 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #ffffff;
    margin-top: 36px;
  }
`;

const Button = styled.div`
  width: 326px;
  height: 46px;
  left: 23px;
  top: 375px;

  background: #a328d6;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;
