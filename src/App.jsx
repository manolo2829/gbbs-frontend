import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Foros from './components/Foros';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import ObjetoForo from './components/ObjetoForo';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/foros' element={<Foros/>}></Route>
        <Route path='/objetoforo/:id' element={<ObjetoForo/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
