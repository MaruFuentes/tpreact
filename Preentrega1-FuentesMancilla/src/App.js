import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Personalizado } from './components/personalizados/Personalizado';
import { Nosotros } from './components/nosotros/Nosotros';
import { Contacto } from './components/contacto/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/personalizados" element={<Personalizado/>} />
          <Route exact path="/nosotros" element={<Nosotros/>} />
          <Route exact path="/contacto" element={<Contacto/>} />
          <Route exact path="/category/:id" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
