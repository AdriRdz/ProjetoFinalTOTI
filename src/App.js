import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import TodososAlunos from './components/TodosOsAlunos';
import AdicionarAluno from './components/AdicionarAluno';
import EditarAluno from './components/EditarAluno';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';



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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
