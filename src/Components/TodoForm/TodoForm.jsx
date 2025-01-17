import { useState } from "react";


function TodoForm({onAdd}) {

    const[text,setText]=useState("")
    return(
        <form className="header" onSubmit={(e)=>{
            e.preventDefault()
            onAdd(text)
            setText("")
        }}>
            <input type="text" placeholder="What needs to be done?" value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <button>Add</button>
        </form>
    );
}

export default TodoForm