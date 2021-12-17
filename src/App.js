import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='foto'>
        <img src='https://avatars.githubusercontent.com/u/54916868?v=4' alt='Este sou eu'/>
        <div className='infos'>
          <a href='https://github.com/MarlonSdS' target='_blank'><img src='/icons/github-icon.png'/>Github</a>
        </div>
      </div>
      <div className='presentation'>
        <p>Olá! Eu sou o Marlon dos Santos!</p><br />
        <p>Sou um desenvolvedor iniciante</p>
      </div>
    </div>
  );
}

export default App;
