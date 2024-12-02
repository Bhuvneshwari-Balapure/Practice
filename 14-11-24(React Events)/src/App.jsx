
/* 
  React Events :- 
      are User Interaction with the web application
    , such as Clicks , keyboard input , and other actions that 
      trigger a response in the interface


  React Event Object :-
            An Event Object refers to the arguement
            sent into an event handler function 

*/
function App() {
  const display1=()=>{
    alert("this is onlcick event without arguement")
  }
  const display2=(nm)=>{
    alert(`My Name is : ${nm}`)
  }
  const EventObject=(name , e)=>{
    alert(`My Name is : ${name} , and Event Used : ${e.type}`)
    
  }
  const getval=(e)=>{
    const nm = e.target.name;
    const val = e.target.value;
    alert(`My Name is : ${nm} and my Age is : ${val}`)
    

  }
  return (

    <>
      <h2>On Click Event</h2>
      <h3>  Function Without Argument</h3>
      <button onClick={display1}>Click Here</button>

      <h3>Function with arguement</h3>
      <button onClick={()=>{display2("Ayushi")}}>Click Here</button>

      <h3>Event Object</h3>
      <button onClick={(e)=>{EventObject("Ayushi",e)}}>Click Here</button>  

      <h3>Function With Parameter</h3> 
      <p>Acces data by its name and value</p>
      <button  onClick={getval} name="Aushi" value="23">Click Here</button>  

      <h3>Getting Name and Value By Input</h3>
      <input type="text"></input>
    </>
  )
}

export default App
