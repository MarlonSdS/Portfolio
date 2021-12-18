import '../styles/CartaoVisitas.css'

function CartaoVisitas() {
    return (
      <div className='main'>
        <div className='foto'>
          <img src='https://avatars.githubusercontent.com/u/54916868?v=4' alt='Este sou eu' className='profpic'/>
          <div className='infos'>
            <a href='https://github.com/MarlonSdS' target='_blank'><img src='/icons/github-icon.png'/>Github</a>
            <a href='https://www.linkedin.com/in/marlon-dos-santos-17469417b/' target='_blank'><img src='/icons/linkedin-icon.png'/>Linkedin</a>
            <a><img src='/icons/email-icon.png'/>marlonfms2012@gmail.com</a>
            <a><img src='/icons/whatsapp-icon.png'/>(88) 9 9646-9864</a>
          </div>
        </div>
        <div className='presentation'>
          <p>Olá! Eu sou o Marlon dos Santos! Sou um desenvolvedor iniciante recém formado no
            Centro Universitário Vale do Salgado em Icó-CE. Procuro me especializar em desenvolvimento
             web. Atualmente desenvolvo principalmente em javascript com foco em node e react, inclusive 
             esta página aqui foi feita com react. Te convido a continuar scrollando e conhecer minhas experiências
             e certificações.
          </p>
        </div>
      </div>
    );
  }

  export default CartaoVisitas;