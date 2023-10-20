import { useState } from 'react';
import './App.css';
import Sayac from './components/classComp';
import Paper from './components/functionComp';
import User from './components/user';
import RefTest from './components/refTest';
import FilterUser from './components/FilterUser';
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => setShow(!show)}
        className="btn btn-danger"
      >
        Hide
      </button>

      <h2 className="my-5">Users:</h2>
      {show && <FilterUser />}
    </div>
  );
}

export default App;