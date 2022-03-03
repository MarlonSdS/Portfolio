import './App.css';
import CartaoVisitas from './components/CartaoVisitas';
import Certificados from './components/Certificados';
import Header from './components/Header';
import Projetos from './components/Projetos';

function App() {
  document.title= "Marlon Santana dos Santos"
  return (
    <div>
      <Header />
      <CartaoVisitas className='cv'/>
      <p className='subtitle'>Algumas certificações que possuo</p>
      <Certificados />
      <br/>
      <p className='subtitle'>Alguns projetos que participei</p>
      <br/>
      <Projetos />
    </div>
    
  );
}

export default App;
