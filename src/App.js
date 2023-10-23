// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  // const[name,setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [add, setAdd] = useState(false)
  // const addUser = (e) => {
  //   e.preventDefault();
  //   setAdd(true);
  // }
  return (
    <div className="App">
      <Header  />
      <div className='main'>
        <Sidebar />
        <Form  />
    </div>
    </div>
  );
}

export default App;
