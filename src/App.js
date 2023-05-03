import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/navigation/Navigation.component';
import Checkout from './Routes/checkout/Checkout.component';
import Login from './Routes/login/Login.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/checkout' element={<Checkout />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
