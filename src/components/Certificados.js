import '../styles/Certificados.css'
import {useState} from 'react'



function Certificados(){
    const certificados = [
        '/certificados/certificado-fabrica.png',
        '/certificados/certificado-nodejs.png'
    ]
    const titulos = [
        'Fábrica de Software',
        'NodeJs'
    ]

    const description = [
        `Este foi um projeto de extensão do qual eu participei
        ainda na faculdade. Consistia em um grupo de alunos, orientados
        por alguns professores, pegarem projetos de verdade para
        desenvolver. Essa foi a minha primeira experiência prática.`,
        `Curso formação NodeJs ministrado pelo professor Victor Lima
        na plataforma Udemy. `
    ]

    const maxSize = certificados.length;
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
                    <img src={certificados[position]}/>
                </div>
                <div className='cert-infos'>
                    <h1>{titulos[position]}</h1>
                    <h2>
                        {description[position]}
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