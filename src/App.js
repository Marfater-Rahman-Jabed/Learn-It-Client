import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="">
      <Routes></Routes>
      <Toaster />
    </div>
  );
}

export default App;
