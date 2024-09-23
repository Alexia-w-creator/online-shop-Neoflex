import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Basket from './pages/basket';
import Favourite from './pages/favourite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/favourite' element={<Favourite />}/>
          <Route path='/basket' element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
