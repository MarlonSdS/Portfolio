import './App.css';
import CartaoVisitas from './components/CartaoVisitas';
import Certificados from './components/Certificados';
import Header from './components/Header';

function App() {
  document.title= "Marlon Santana dos Santos"
  return (
    <div>
      <Header />
      <CartaoVisitas />
      <p className='subtitle'>Algumas certificações que possuo</p>
      <Certificados />
    </div>
    
  );
}

export default App;
