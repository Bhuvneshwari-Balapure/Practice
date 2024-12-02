
/* 
  React Hook ka use kar ke state management karte hai .

  useState :-   useState is a React Hook that allow you to manage state in Functional components.

  state    :-   (the Current Value) In react , state represents data or variables that can change over time and affect how
                the component render. 

  Hook     :-   useState is one of the built-in  in react Hook that lets functional components have a stateful logic


*/


// importing useState
import { useState } from "react"

function App() {

  // State management 
  const [city , setCity] = useState("Bhopal");
  const [color , setColor] = useState("purple")
  const [cnt , setCnt] = useState(0);
  /*
    city ek state variable hai jo current value ko store kar rha hai
    setCity ek function hai jo city ki value ko update karne ke liye use kar rahe hai
  */
  const myval=()=>{
    setCity("indore");
  }


  const incVal=()=>{
    setCnt(cnt+1);
  }
  const decVal=()=>{
    setCnt(cnt-1);
  }
  const reset=()=>{
    setCnt(0);
  }

  return (
    <>
      <h4>Wellcome to : {city}</h4>
      <button onClick={myval} >Click to change City</button>

      <br/><br/>

      <h3>Changing Color and Color Name </h3>
      <h4 style={{color:color}}>My Favrouite Color is : {color}</h4>
      <button 
      onClick={()=>{
        setColor("blue")
      }}>Click Here to Change color</button>


      <h3>Counter Program in React</h3>
      <h4>Count Down : {cnt}</h4>
      <button onClick={incVal}>Increament</button> &nbsp;&nbsp;
      <button onClick={decVal}>Decreament</button> &nbsp;&nbsp;
      <button onClick={reset}>Reset</button>

     
    </>
  )
}

export default App
