import { useState } from 'react';
import './App.css';
import { useToGetUsers, useToSendLead } from './helper';

const Header = () => {
const [inputObj, setInputObj] = useState({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const { data, isPending, isError } = useToGetUsers(inputObj);
const mutation = useToSendLead();
console.log(data, isPending, isError, '====', mutation);

const handleChange = (e) => {
  const { name, value } = e.target;
  setInputObj((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = () => {  
  console.log(inputObj, mutation.mutate(inputObj));
};

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around'}}>
      <header className="App-header" style={{ minWidth: '40%' }}>
        <h1> Welcome to test whatsApp Api </h1>
        <input type='text' name='name' placeholder='Enter Name' data-testid='name' value={inputObj.name} onChange={handleChange}/>
        <br />
        <input type='text' name='email' placeholder='Enter email' data-testid='email' value={inputObj.email} onChange={handleChange}/>
        <br />
        <input type='text' name='phone' placeholder='Enter phone' data-testid='phone' value={inputObj.phone} onChange={handleChange}/>
        <br />
        <input type='text' name='address' placeholder='Enter address' data-testid='address' value={inputObj.address} onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Send</button>
      </header>

      <div className='users' style={{ minWidth: '40%' }}> 
        {isPending && <div>Loading...</div>}
        {isError && <div>Something went wrong...</div>}
        { data && data.map((user) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Header;
