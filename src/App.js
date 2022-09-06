import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthBusHome from './auth/AuthBusHome';
import AuthPost from './auth/AuthPost';
import LoginContainer from './auth/users/LoginContainer';
import RegisterContainer from './auth/users/RegisterContainer';
import './css/main.css';
import Navbar from './main/components/Navbar';
import MainContainer from './main/MainContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainContainer/>} />
            <Route path='/login' element={<LoginContainer/>} />
            <Route path='/register' element={<RegisterContainer/>} />
            <Route path='auth/bushome' element={<AuthBusHome/>} />
            <Route path='auth/buspost' element={<AuthPost/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
