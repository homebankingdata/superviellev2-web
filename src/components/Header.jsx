import React from 'react';
import {Image} from "react-bootstrap";
import "../Header.css";

const Header = () => {
    return (
        <div>
            <a href="https://www.supervielle.com.ar" style={{maxWidth:"155px", boxSizing:"border-box", cursor:"pointer", textDecoration:"underline"}}>
              <Image src="./img/supervielle-logo.svg" fluid style={{maxWidth:"100%", margin:"20px 2px 11px", boxSizing:"border-box", cursor:"pointer", minWidth:"300px"}}></Image>
            </a>
            <nav 
                className="header-links"
                style={
                    {
                        boxSizing:"border-box",
                        display:"block"
                }}>
                <ul className="header-links_list" style={{display:"flex", marginBlockStart:"10px", marginBlockEnd:"10px", listStyle:"none"}}>
                    <li className="header-links_item" style={{margin:"0 9px"}}>
                        <a href="https://www.supervielle.com.ar/tutoriales" title="Ayuda" style={{backgroundImage:"./img/ayuda.png", backgroundSize:"420px 100px", backgroundPositionY:"-55px", width:"39px", height:"39px", display:"inline-block", cursor:"pointer", textDecoration:"underline", boxSizing:"border-box"}}>
                            <img className="item" src="./img/ayuda.png" alt="ayuda" style={{width:"39px", height:"39px"}}/>
                        </a>
                    </li>
                    <li className="header-links_item" style={{margin:"0 9px"}}>
                        <a href="https://www.supervielle.com.ar/personas/servicios-digitales/seguridad" title="Seguridad" style={{backgroundImage:"./img/ayuda.png", backgroundSize:"420px 100px", backgroundPositionY:"-55px", width:"39px", height:"39px", display:"inline-block", cursor:"pointer", textDecoration:"underline", boxSizing:"border-box"}}>
                            <img className="item" src="./img/seguridad.png" alt="seguridad" style={{width:"39px", height:"39px"}}/>
                        </a>
                    </li>
                    <li className="header-links_item" style={{margin:"0 9px"}}>
                        <a href="https://www.supervielle.com.ar/personas/servicios-digitales/online-banking" title="Descargar instructivo" style={{backgroundImage:"./img/ayuda.png", backgroundSize:"420px 100px", backgroundPositionY:"-55px", width:"39px", height:"39px", display:"inline-block", cursor:"pointer", textDecoration:"underline", boxSizing:"border-box"}}>
                            <img className="item" src="./img/instructivo.png" alt="instructivo" style={{width:"39px", height:"39px"}}/>
                        </a>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Header;
