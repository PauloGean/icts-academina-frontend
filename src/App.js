import logo from './logo.svg';
import './App.css';
import './MeuCss.css'
import './tableCustom.css'
import ClienteList from './pages/cliente/cliente-list';
import ClienteCreate from './pages/cliente/cliente-create';

function App() {

 
  return (
    <div className="App">
      <ClienteList></ClienteList>
    </div>
  );
}

export default App;
