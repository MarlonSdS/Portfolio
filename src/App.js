import './App.css';
import CartaoVisitas from './components/CartaoVisitas';
import Header from './components/Header';

function App() {
  document.title= "Marlon Santana dos Santos"
  return (
    <div>
      <Header />
      <CartaoVisitas />
      <CartaoVisitas />
    </div>
    
  );
}

export default App;
