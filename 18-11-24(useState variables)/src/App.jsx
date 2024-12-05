import { useState } from "react"

function App() {
  const [input , setInput]=useState({});

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setInput(values=>({...values , [name]:value}))

   

  }
  console.log(input);


  return (
    <>
      <div className="FormDiv">
        <form>
          <h3>Application Form</h3> 
          <input type="text"  placeholder="Enter Name" name="name" onChange={handleInput}/>
          <input type="number" placeholder="Roll number" name="rollno" onChange={handleInput} />
          <input type="text"  placeholder="Enter City" name="city" onChange={handleInput} />
          <input type="number"  placeholder="Enter fees" name="fees" onChange={handleInput} />
          <button>click</button>

        </form>

      </div>

      
    </>
  )
}

export default App
