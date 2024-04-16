import { useEffect, useState } from 'react';
import './App.css';
import {getPost, getRandomUser} from './api/getPost'
import PostCard from './api/components/PostCard';
import UserCard from './api/components/UserCard';

function App() {

  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    getPost().then(posts => setData(posts))
  }, [])

  useEffect(()=>{
    getRandomUser().then(user => setUserData(user.results[0]))
  }, [])

  const refresh = () =>{
    getRandomUser().then(user => setUserData(user.results[0]));
  }

  return (
    <div>
      {userData && <UserCard data={userData}/>}
      <button onClick={refresh}>Refresh </button>
      {
        data ? data.map((e)=> <PostCard title={e.title} body={e.body}/> ) : <p>No Data</p>
      }
    </div>
  );
}

export default App;
