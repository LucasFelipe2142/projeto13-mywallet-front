//import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { MdSave } from "react-icons/md";
import axios from "axios";

export default function New_entry() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Nova Entrada</h1>
      <input
        disabled={false}
        type="number"
        name="input"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={() => Save()}>Salvar Entrada</Button>
    </Container>
  );

  function Save() {
    axios
      .post(
        "http://localhost:5000/add_or_remove_value",
        {
          type: "add",
          valor: value,
          description: description,
        },
        {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    height: 28px;
    width: 326px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */

    color: #ffffff;

    margin: 25px 0 22px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
