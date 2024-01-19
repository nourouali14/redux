import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import EditUserForm from './components/EditUser';


function App() {

  return (
    <div className="App">
    <AddUser/>
     <UserList/>
     <EditUserForm/> 
    </div>
  );
}

export default App;
