import logo from './logo.svg';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import React,{useState} from 'react';

function App() {
  const [userslist, setuserslist] = useState([])

  const addUserHendler=(user,age)=>{
    setuserslist((prev)=>{
     return  [...prev,{name:user,age:age}]
    })
    console.log('userList :',userslist)
  }

  return (
    <div>
     <AddUser onAddUser={addUserHendler} />
     <UserList users={userslist}/>
    </div>
  );
}

export default App;
