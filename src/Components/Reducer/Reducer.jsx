function reducer(state,action) {
    if (action.type==="onAdd") {
      return [
        ...state,
        {id:Math.random(),text:action.payload.text,complated:false}
      ]
    } else if(action.type === "onDelete"){
      return state.filter((t)=> t.id != action.payload.id)
    } else if (action.type === "onChange") {
      return  state.map((todo)=>{
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
    } else if (action.type === "onClear"){
      return state.filter((todo) => !todo.complated)
    }
  }

export default reducer  