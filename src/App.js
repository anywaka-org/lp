
import './App.css';
import Landing from './Landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tandc from './tandc';

function App() {
  return (
   <>
  <BrowserRouter>
    <Routes>
          <Route path='*' element={<Landing />} />
          <Route path='tandc' element={<Tandc />} />
    </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
