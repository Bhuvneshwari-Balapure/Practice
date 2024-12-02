
import Employe from "./EmpData"
function App() {

  const ans = Employe.map((key)=>{
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.salary}</td>
        </tr>
      </>
    )
  })

  return (
    <>
      <table border="1">
        <tr>
          <th>Emp Id</th>
          <th>Emp Name</th>
          <th>Emp City</th>
          <th>Emp Salary</th>
        </tr>
        {ans}
      </table>
      
    </>
  )
}

export default App
