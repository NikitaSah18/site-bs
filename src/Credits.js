import React from "react";
import { Link } from "react-router-dom";
import Background from './images/zaim4.png'
import Background1 from './images/urg.png'
import Background2 from './images/hrus2.png'





export const Credits = () => (

  <>
    <h1>Наши продукты</h1>
    <div class="p-5 mb-4 bg-light rounded-0" style={{ background: `url(${Background})` }}>
      <div class="container-fluid py-5">
        <h3 class="display-7 fw-bold">Микрозайм</h3>
        <p class="md-6 fs-4">Требований у нас очень мало. Ваш возраст должен быть от 18 до 90 лет. В анкете Вам необходимо указать достоверные данные и у Вас должен быть личный банковской счет или банковская карта.</p>
        <Link to="/Form"><button type="button" class="btn btn-warning">Оформить</button></Link>
      </div>
    </div>
    <div class="p-5 mb-4 bg-light rounded-0" style={{ background: `url(${Background1})` }}>
      <div class="container-fluid py-5">
        <h3 class="display-7 fw-bold text-white">Потребительский кредит</h3>
        <p class="md-6 fs-4 text-white"> Ваш возраст должен быть от 18 до 90 лет. Вы должны быть гражданином РФ, иметь положительную кредитную историю, отсутствие задолженностей,наличие постоянного источника доходов и непрерывного трудового стажа свыше одного года.</p>
        <Link to="/Form"><button type="button" class="btn btn-warning">Оформить</button></Link>
      </div>
    </div>
    <div class="p-5 mb-3 bg-light rounded-0" style={{ background: `url(${Background2})` }}>
      <div class="container-fluid py-5">
        <h3 class="display-7 fw-bold text-white">Ипотечное кредитование</h3>
        <p class="md-6 fs-4 text-white"> Клиент берёт у банка деньги в долг на длительное время и под установленный процент, чтобы купить квартиру или дом. Пока средства не выплачены, жильё находится одновременно в собственности у заёмщика и в залоге у банка. Клиент может им пользоваться. .</p>
        <Link to="/Form"><button type="button" class="btn btn-warning">Оформить</button></Link>
      </div>
    </div>


  </>

)

export default Credits;

