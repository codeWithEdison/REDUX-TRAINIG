import React from 'react';
import { useSelector } from 'react-redux';
import UserUpdate from './components/forms/UserUpdate';

function App() {
  const [value, setValue] = React.useState(0);
  // const [user, setUser] = useState("Edison")
 const myName = useSelector(state => state.user.userInfo.name);    
  return ( 
    <div>
      <h1>Hello, {myName}</h1>

      <UserUpdate/> 

    </div>
  );
}
export default App;
