import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { HomeContainer, Cart } from './Pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
