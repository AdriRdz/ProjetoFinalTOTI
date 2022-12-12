import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TodososAlunos from './components/TodososAlunos';
import AdicionarAluno from './components/AdicionarAluno';
import EditarAluno from './components/EditarAluno';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<TodososAlunos />} />
        <Route path='/add' element={<AdicionarAluno />} />
        <Route path='/edit/:id' element={<EditarAluno />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
