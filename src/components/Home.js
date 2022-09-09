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
    const requisicao = axios
      .get(`http://localhost:5000/add_or_remove_value`, {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((Selecione) => {
        console.log(Selecione.data.length);
        if (Selecione.data.length === 0) {
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
        {`Olá, ${JSON.parse(localStorage.getItem("name"))}`}{" "}
        <div onClick={() => navigate("/")}>
          <RiLogoutBoxRLine />
        </div>{" "}
      </h1>
      <div className={noValors}>
        <Box>
          <p>
            <h2>Não há registros de entrada ou saída</h2>
          </p>
        </Box>
      </div>
      <div className={haveValors}>
        <Box>
          <div className="valorsContainer">
            {valors.map((val) => (
              <div className="valor">
                <div className="dateAndDescription">
                  <div className="date">{val.date}</div> {val.description}
                </div>
                <Price cor={verifycolor(val.type)}> {val.valor} </Price>
              </div>
            ))}
          </div>
          <Balance cor={verifyCorSaldo()}>
            <div className="saldo">Saldo</div>
            {verifySaldo()}
          </Balance>
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

  function verifySaldo() {
    let saldo = 0.0;
    for (let i = 0; i < valors.length; i++) {
      console.log(saldo);
      if (valors[i].type === "add") saldo += parseFloat(valors[i].valor);
      else saldo -= parseFloat(valors[i].valor);
    }
    return saldo;
  }

  function verifyCorSaldo() {
    if (verifySaldo() >= 0) return "#03AC00";
    else return "#C70000";
  }

  function verifycolor(cor) {
    if (cor === "add") return "#03AC00";
    else return "#C70000";
  }
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
  position: relative;
  width: 326px;
  height: 446px;

  background: #ffffff;
  border-radius: 5px;

  p {
    width: 326px;
    height: 446px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
  }

  h2 {
    width: 180px;
  }

  .valorsContainer {
    width: 326px;
    padding-top: 23px;
    display: flex;
    flex-direction: column;
    align-items: initial;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }
  .valor {
    width: 326px;
    display: flex;
    justify-content: space-between;
    padding: 0 12px 0 12px;
    margin-bottom: 15px;
  }
  .dateAndDescription {
    display: flex;
  }
  .date {
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #c6c6c6;
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

const Price = styled.div`
  color: ${(props) => props.cor};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`;

const Balance = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  width: 326;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  padding: 0 12px 0 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => props.cor};
  .saldo {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */

    color: black;
  }
`;
