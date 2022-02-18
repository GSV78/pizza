import { Route, Routes } from 'react-router-dom';
import { HeaderContainer } from './components';
import { HomeContainer, CartContainer } from './Pages';

function App() {
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
