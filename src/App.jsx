import './App.css'
import Counter from './Count'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('Button clicked')
  }
  const handleClick2 = () =>{
    alert('button click 2')
  }
  const addFive =(num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h1>React Core Concept -02</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('Third clicked me')}}>Click Me3</button>
      <button onClick={()=>addFive(3)}>Four</button>
    </>
  )
}

export default App
