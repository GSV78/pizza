import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getPizzas } from './api/api';
import { Header } from './components';
import { Home, Cart } from './Pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(async () => {
    let data = await getPizzas();
    setPizzas(data);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
