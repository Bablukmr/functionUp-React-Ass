import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/register';
import Video from './pages/Video';
import Contact from './pages/Contect';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/videos' element={<Video/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

