
/* 
if we have single line code in map function then we can remove
return and brackets 

ex :- const name = ["ayushi" , "prachi" , "Priya"];

      ----------- We write it Like This-----------
      const data = name.map((key)=>{
        return (
          <>
            <h2>{key}</h2>
          </>
        )
        
      })

      -------------But in single Line we Write it like------------
      const data = name.map((key)=><h2>{key}</h2>)


      -------------then----------------------
      return (
        <>
          <h3>Display Data </h3>
          <hr/>
          {data}

        </>
      )




*/



const Strudent = [

  {
    rollno : 121,
    name: "ayushi",
    city:"Bhopal"
  },
  {
    rollno: 122,
    name: "Prachi",
    city: "Indore",
  },
  {
    rollno: 123,
    name: "Priya",
    city: "Jabalpur",
  },

]

function App() {
  const ans = Strudent.map((key)=>{
    return (
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
        </tr>
      </>
    )
  })
  
  return (
    <>
      <h3>Data Display Here</h3>
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default App
