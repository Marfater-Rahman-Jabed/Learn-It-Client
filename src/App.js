import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Routes></Routes>
      <Toaster />
    </div>
  );
}

export default App;
