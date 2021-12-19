class PassarCertificados{
    nextItem(){
        console.log('next')
    }
    
    prevItem(){
        console.log('prev')
    }
    
    
    certificados = [
        '/certificados/certificado-fabrica.png',
        '/certificados/certificado-nodejs.png'
    ]
    titulos = [
        'Fábrica de Software',
        'NodeJs'
    ]
    
    description = [
        `Fábrica descricao descricao
        descricao descricao descricao
        descricao descricao descricao
        descricao descricao descricao`,
        `NodeJs descricao descricao
        descricao descricao descricao
        descricao descricao descricao
        descricao descricao descricao`
    ]
    
    maxSize = this.certificados.length;
    position = 0;
}

export default PassarCertificados
