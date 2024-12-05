

import { useState  ,useEffect } from "react";
import axios from 'axios';



function App() {
  const [mydata , setmydata]=useState([]);

  const loadData=()=>{
    let api = "http://localhost:3000/student";
    axios.get(api).then((res)=>{
      console.log(res.data)
      setmydata(res.data);
    })
  }

  useEffect(()=>{
    loadData();

  },[])

  const ans = mydata.map((key)=>{
    return (
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.course}</td>
          <td>{key.fees}</td>
        </tr>
      </>
    )
  })

  return (
    <>
      <div className="table">
        <h1>Data</h1>

        <table>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Course</th>
            <th>Fees</th>
          </tr>
          {ans}
        </table>
      </div>

     
    </>
  )
}

export default App
