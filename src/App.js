import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HeaderContainer } from './components';
import { HomeContainer, CartContainer } from './Pages';
import { getPizzas } from './redux/homeReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <HeaderContainer />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
