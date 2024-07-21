import React, { useEffect, useState } from "react";
import { getPosts, getUser } from "./api";
import './App.css';
// import PostCard from "./components/postCard";
import UserCard from "./components/UserCard";

function App() {
  // const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   getPosts().then(posts => setData(posts)); //then is used to get the data from the promise; 
  // }, []);

  useEffect(() => {
    getUser().then(user => setUserData(user.results[0])); //then is used to get the data from the promise; 
  }, []);

  // console.log(userData);
  const refreshUser = () => {
    getUser().then(user => setUserData(user.results[0])); //then is used to get the data from the promise;
  }


  return (
    <div className="App">

      {userData && <UserCard data={userData} />}
      <button className="refreshBtn" onClick={refreshUser}>Refresh</button>
{/* 
      {
        data ? (data.map((post) => <PostCard title={post.title} body={post.body} />)) : (<p>Loading...</p>)
      } */}
    </div>
  );
}

export default App;
