import styled from "styled-components";

export const Painel = styled.div`
height: 650px;
width: 99%;
margin: auto;
border-radius: 10px;
margin-bottom: 50px;
margin-top: 50px;
background: linear-gradient(#44475a, #282a36);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const PassButton = styled.button`
height: 650px;
width: 10%;
background: linear-gradient( #9E73FD, #80FFEA);
color: aliceblue;
font-size: 50px;
font-weight: bold;
border: none;
border-radius: 10px;
justify-content: center;
@media (max-width:1000px) {
    height: 65px;
    width: 5%;
    background: none;
    svg{
        width: 10px;
    }
}
`;

export const Visor = styled.div`
width: 80%;
color: white;
padding:1%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
}
`;
//old background color #81A1C1
