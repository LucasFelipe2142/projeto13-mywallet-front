//import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { RiLogoutBoxRLine, RiAddCircleLine } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";

const name = "Fulano";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        {`Olá, ${name}`}{" "}
        <div onClick={() => navigate("/")}>
          <RiLogoutBoxRLine />
        </div>{" "}
      </h1>
      <Box>
        <p>Não há registros de entrada ou saída</p>
      </Box>
      <div></div>
      <Entrance_and_Exit>
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
      </Entrance_and_Exit>
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
`;
const Entrance_and_Exit = styled.div`
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
