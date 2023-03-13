import React from "react";
import { Carousel } from "react-bootstrap";
import bank from './images/bank.png'
import bank1 from './images/bank1.jpg'

export default function Slider() {

  return (
    <Carousel>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={bank}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Банк Тинькок</h3>
          <p>
            Он такой один!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={bank1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Банк Тинькок</h3>
          <p>
            Он такой один!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}