import { useReducer} from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoFooter from './Components/TodoFooter/TodoFooter';
import reducer from './Components/Reducer/Reducer';


function App() {
const [todos,dispatch] = useReducer(reducer,[])

const onAdd = (text)=>{
    dispatch({
      type:"onAdd",
      payload:{
        text:text
      }
    })
}

const onDelete = (todo)=>{
    dispatch({
      type:"onDelete",
      payload:{
        id:todo.id
      }
    })
}

const onChange = (newTodo)=>{
    dispatch({
      type:"onChange",
      payload:newTodo
    })
}

const onClear = ()=>{
    dispatch({
      type:"onClear"
    })
}

  
return (
  <div className="App">
    <p>todos</p>
    <div className="root">
      <TodoForm onAdd={onAdd}/>
      <TodoList 
          todos={todos} 
          onDelete={onDelete} 
          onChange={onChange}/>
      <TodoFooter todos={todos} onClear={onClear}/>
    </div>
  </div>
 );
}

export default App;
