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
      <Certificados />
    </div>
    
  );
}

export default App;
