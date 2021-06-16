import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import LoginForms from "../LoginForms"
import {Row, Col} from "react-bootstrap";

const MainView = () => {
    return (
        <div>
            <Row>
                <Col style={{width:"35%"}}>
                    <div id="scroll-image">
                    <img src="./img/supervielle1.png"
                        id="img1" className="test" alt="rodete"/>
                    <img src="./img/supervielle2.png" 
                        id="img2" className="test" alt="chico"/>
                    <img src="./img/supervielle3.png" 
                        id="img3" className="test" alt="saco verde"/>
                    </div>
                </Col>
                <Col style={{width:"65%"}}>
                    <main className="wrapper-right container-login">
                    <div className="wrapper-right" style={{marginLeft:"150px"}}>
                        <div>
                        <Header />
        
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                        <LoginForms/>
                        </div>
                        <div>
                        <Footer/>
                        </div>
                    </div>
                    </main>
                </Col>
            </Row>
        </div>
    )
}


export default MainView;
