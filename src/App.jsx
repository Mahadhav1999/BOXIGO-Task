import './App.css';
import {Button} from 'primereact/button';

import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}  />
      </Routes>

    </Router>
    </>
  )
}

export default App;
