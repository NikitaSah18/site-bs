import React from "react";

const Footer = () => (
    
        
    <footer fluid style={{ backgroundColor: '#212529', color: '#fff' }} >
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Банк Тинькок</h5>
                    <p>Все для людей.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Написать автору</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://vk.com/typomashina">Сообщить о проблеме</a></li>

                    </ul>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Помочь автору</h5>
                <ul className="list-unstyled">
                    <li><a href="https://qiwi.com/payment/form/99999?extra[%27accountType%27]=phone&extra%5B%27account%27%5D=79913460735">Qiwi</a></li>
                </ul>
            </div>





            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2023 Банк Тинькок

        </div>
        

      </footer>
   
   

)
export default Footer;