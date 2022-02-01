import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfUser, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");


  useEffect(()=> {
    Axios.get("http://localhost:3001/getUser").then((response) => {
      setUserList(response.data);
    })
  }, []);


  const createUserData = () => {
    Axios.post("http://localhost:3001/createUser", {name: name, age: age, username:username }).then((response) => {
      setUserList([...listOfUser, {name: name, age: age, username:username } ]);
    })
  }

  return (
    <div className="App">
      <div className='userDisplay'>
        { listOfUser.map((user) => {
          return (
            <div key={user._id}> 
                <h1>{user.name} </h1>
                <h1>{user.age} </h1>
                <h1>{user.username} </h1>
            </div>
            );
        })}
      </div>
      <div>
        <input type="text" placeholder='name...' onChange={(e) => {setName(e.target.value)}} />
        <input type="text" placeholder='age...' onChange={(e) => {setAge(e.target.value)}} />
        <input type="text" placeholder='username...' onChange={(e) => {setUsername(e.target.value)}} />
        <button onClick={createUserData}> Create user </button>
      </div>
    </div>
  );
}

export default App;
