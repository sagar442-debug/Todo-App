import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = () => {
    setTodoList([...todoList, todo])
  }

  const handleDelete=(index)=>{
    const filteredData = todoList.filter((_,i)=>i!== index)
    setTodoList(filteredData)
  }


  return (
    <div className="App">
      <div className="input">
        <input value={todo} onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {
          todoList.map((todo,index) => {
            return(
              <ul key={index}>
              <li>{todo} 
                <button onClick={()=>handleDelete(index)}>X</button>
              </li>
            </ul>
            )
            
          })
        }
      </div>



    </div>
  );
}

export default App;
