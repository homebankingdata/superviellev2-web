import React from 'react';

const Footer = () => {
    return (
        <div>
            <p 
                className="footer-text" 
                style={
                    {
                        fontSize:"12px", 
                        lineHeight:"1.38", 
                        color:"rgba(26, 38, 51, 0.5)", 
                        marginTop:"15px", 
                        boxSizing:"border-box", 
                        display:"block", 
                        fontFamily:"sans-serif", 
                        marginBlockStart:"1em", 
                        marginBlockEnd:"1em", 
                        fontWeight:"normal", 
                        fontStyle:"normal"
                }}>
                Banco Supervielle S.A. no solicita actualización de datos vía Email o en forma telefónica.
                <br/>
                Para mayor tranquilidad le sugerimos leer nuestras políticas de seguridad.
                <br/>
                Ante cualquier inquietud no dude en comunicarse con nosotros al 0810-333-4959.
            </p>
            
        </div>
    )
}

export default Footer;