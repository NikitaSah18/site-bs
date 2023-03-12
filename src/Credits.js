import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Media } from "react-bootstrap";
import micro from './images/micro.jpg'

export const Credits = () => (
  <>
    <h1> Виды кредитов </h1>
    <img src={micro} className="rounded-4 shadow-4 float-start m-4"
      alt="" style={{ width: "100px" }} />

    <p className=""> у нас очень мало. Ваш возраст должен быть от 18 до 90 лет. В анкете Вам необходимо
      указать достоверные данные и у Вас должен быть личный банковской счет или банковская карта.
    </p>
  </>

)

export default Credits;

