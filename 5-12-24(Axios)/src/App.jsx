import { useState , useEffect } from 'react';
import axios from 'axios';


function App() {

  const [mydata, setmydata]=useState([]);
  const loadData=()=>{
    let api = "https://jsonplaceholder.org/comments";
    axios.get(api).then((res)=>{
      setmydata(res.data);
      console.log(res);
    })
  }
  useEffect(()=>{
    loadData();
  },[])

  const ans = mydata.map((key)=>{
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.postId}</td>
          <td>{key.userId}</td>
          <td>{key.comment}</td>
        </tr>
      </>
    )
  })


  return (
    <>
      <center>
        <h3>Axios</h3>
        <p>Axios is a popular java Script library used for making HTTP request from the browser or Node.js 
          <br/> 
          In React , it is commonly used to interact with APIs for fetching , sending or updating data.
          It Provide a promise-based interface for cleaner and more concise code compared to the native fetch API .
        </p>
        <h4>First step</h4>
        <p>Run Command on Terminal to install axios 
          <br></br>
          <strong>npm i axios</strong>
        </p>

        
      </center>
      <div className="table">
          <table>
            <tr>
              <th>ID</th>
              <th>Post Id</th>
              <th>User Id</th>
              <th>Comment</th>
            </tr>
            {ans}


          </table>




        </div>
      
    </>
  )
}

export default App
