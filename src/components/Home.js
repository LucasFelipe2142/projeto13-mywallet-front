import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { RiLogoutBoxRLine, RiAddCircleLine } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";

const name = "Fulano";

export default function Home() {
  const navigate = useNavigate();
  const [valors, setValors] = useState([]);
  const [noValors, setNoValors] = useState([]);
  const [haveValors, setHaveValors] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(`http://localhost:5000/add_or_remove_value`, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });

    requisicao.then((Selecione) => {
      if (Selecione === undefined) {
        setNoValors("");
        setHaveValors("clean");
      } else {
        setNoValors("clean");
        setHaveValors("");
        setValors(Selecione.data);
      }
    });
  }, []);

  return (
    <Container>
      <h1>
        {`Olá, ${name}`}{" "}
        <div onClick={() => navigate("/")}>
          <RiLogoutBoxRLine />
        </div>{" "}
      </h1>
      <div className={noValors}>
        <Box>
          <p>Não há registros de entrada ou saída</p>
        </Box>
      </div>
      <div className={haveValors}>
        <Box>
          <div className="valorsContainer">
            {valors.map((val, index) => (
              <div className="valor"> {`${val.description}: ${val.valor}`}</div>
            ))}
          </div>
        </Box>
      </div>

      <div></div>
      <EntranceExit>
        <div onClick={() => navigate("/novaentrada")} className="buton">
          <div className="icon">
            <RiAddCircleLine />
          </div>
          <p>Nova entrada</p>
        </div>

        <div onClick={() => navigate("/novasaida")} className="buton">
          <div className="icon">
            <MdRemoveCircleOutline />
          </div>
          <p>Nova saida</p>
        </div>
      </EntranceExit>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .clean {
    display: none;
  }
  h1 {
    height: 28px;
    width: 326px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */

    color: #ffffff;

    margin: 0 0 22px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 326px;
  height: 446px;

  background: #ffffff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;

    width: 180px;
  }

  .valorsContainer {
    width: 326px;
    height: 446px;
    padding: 23px 35px 0 35px;
  }
`;
const EntranceExit = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;

  margin-top: 13px;
  .buton {
    width: 155px;
    height: 114px;
    padding: 10px 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #a328d6;
    border-radius: 5px;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    color: #ffffff;
  }
  .icon {
    font-size: 22px;
  }
`;
