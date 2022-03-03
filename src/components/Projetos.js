import '../styles/Certificados.css'
import {useState} from 'react'
import listaProjetos from '../artifacts/listaP'

import {Painel, PassButton, Visor} from '../styleds/Gallery'
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa'

 const lista = listaProjetos
function Projetos(){
    const maxSize = lista.images.length;
    var [position, setPosition] = useState(0);
    return(
        <Painel id='ponto3'>
            <PassButton onClick={() => {
                if((position - 1) < 0){
                    setPosition(maxSize - 1)
                }else{
                    setPosition(position - 1)
                    console.log(position)
                }
            }}><FaCaretLeft /></PassButton>
            <Visor>
                <div className='cert'>
                        <img src={lista.images[position]}/>
                    </div>
                    <div className='cert-infos'>
                        <h1>{lista.titles[position]}</h1>
                        <h2>
                            {lista.descriptions[position]}
                        </h2>
                    </div>
            </Visor>
           <PassButton onClick={() =>{
               if((position + 1) == maxSize){
                setPosition(0)
            }else{
                setPosition(position + 1)
                console.log(position)
            }
           }}><FaCaretRight /></PassButton>
        </Painel>
    )
}

export default Projetos