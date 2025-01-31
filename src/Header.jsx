import { useState } from 'react';
import './App.css';

function Header() {
const [inputObj, setInputObj] = useState({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setInputObj((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleClick = () => {
  console.log(inputObj);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>WhatsApp</h1>
        <input type='text' name='name' placeholder='Enter Name' data-testid='name' value={inputObj.name} onChange={handleChange}/>
        <br />
        <input type='text' name='email' placeholder='Enter email' data-testid='email' value={inputObj.email} onChange={handleChange}/>
        <br />
        <input type='text' name='phone' placeholder='Enter phone' data-testid='phone' value={inputObj.phone} onChange={handleChange}/>
        <br />
        <input type='text' name='address' placeholder='Enter address' data-testid='address' value={inputObj.address} onChange={handleChange} />
        <br />
        <button onClick={handleClick}>Send</button>
      </header>
    </div>
  );
}

export default Header;
