import '../styles/Certificados.css'
import {useState} from 'react'
//importando json com os dados dos certificados
import listaCertificados from '../artifacts/listaC';
const lista = listaCertificados

function Certificados(){
    const maxSize = lista.images.length;
    var [position, setPosition] = useState(0);
    return(
        <div className='painel' id='ponto2'>
            <button onClick={() =>{
                if((position - 1) < 0){
                    setPosition(maxSize - 1)
                }else{
                    setPosition(position - 1)
                    console.log(position)
                }
            }}>❮</button>
            <div className='visor'>
                <div className='cert'>
                    <img src={lista.images[position]}/>
                </div>
                <div className='cert-infos'>
                    <h1>{lista.titles[position]}</h1>
                    <h2>
                        {lista.descriptions[position]}
                    </h2>
                </div>
            </div>
            <button onClick={() =>{
                if((position + 1) == maxSize){
                    setPosition(0)
                }else{
                    setPosition(position + 1)
                    console.log(position)
                }
                
            }}>❭</button>
        </div>
    )
}

/*function nextItem(){
    console.log('aa')
}*/

export default Certificados