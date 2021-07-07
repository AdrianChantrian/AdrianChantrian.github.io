import './App.css';
import CurrencyNavi from './CurrencyNavi';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Your Fuse Inc React Dev Test</h1>
        <CurrencyNavi/>
      </div>
    </BrowserRouter>
  );
}

export default App;
