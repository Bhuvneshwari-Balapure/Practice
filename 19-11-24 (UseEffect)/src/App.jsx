import { useState , useEffect } from "react"

function App() {

  const [count , setCount]=useState(0);
  const [cnt , setcnt]=useState(0);
  const [vcnt , setvcnt]=useState(2);


  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1);
    },1000);

  })

  useEffect(()=>{
    setTimeout(() => {
      setcnt(cnt+1)
    }, 1000);
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setvcnt(vcnt*2);
    },1000)
  },[vcnt]);


  const [Count , seCount]=useState(1);
  const [multi , setMulti]=useState(1);


  const mycounter=()=>{
    seCount(Count+2);
  }
    useEffect(()=>{
      setMulti(Count*3);
    },[Count])

 


  

  return (
    <>
      <div className="div">
        <h3>UseEffect</h3>
        <p>useEffect is a react hook that allows you to perform side effect in functional components .
          side effects includes task like data fetching , subscriptions , DOM manipulations ,
          or timers which are operations that occur outside the react rendering process.
        </p>
        <h2>Types of Dependencies in useEffect</h2>

        <h3>1). No Dependency Array</h3>
        <p>when you dont provide a dependency array , the effect runs after every render.</p>
        <h3>Counter {count} </h3>

        <h3>2). Empty Dependency Array</h3>
        <p>if you pass an empty array [] the effect runs only once after the initial render </p>
        <h3>counter {cnt} </h3>

        <h3>3). Dependency array with values</h3>
        <p>if you includes values in the dependency array , the effect runs only when those dependencies change</p>
        <h3>counter {vcnt} </h3>


        <h3>4). Dynamic Dependencies </h3>
        <p>you can include multiple dependencies and the effect will re-run whenever any of them changes </p>
        <h4>counter {Count}</h4>
        <h4>Multiplication {multi}</h4>
        <button onClick={mycounter}>Click Here</button>
    
      </div>
      
    </>
  )
}

export default App
