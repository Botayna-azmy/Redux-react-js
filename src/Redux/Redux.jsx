import { useReducer } from "react"

export default function Redux  () {
    

    const initState = {count:0}
    const reducer = (state,action) => {

        switch(action.type){
            case'up' : return {count : state.count + 1}
            case'down' : return {count : state.count - 1}
            case'reset' : return {count : 0}
            default: return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initState)
 
    return (
    <div>
         <h1>{state.count}</h1>
         <button  onClick={()=>{dispatch({type:'up'})}}>Up</button><br />
         <button  onClick={()=>{dispatch({type:'down'})}}>down</button><br />
         <button  onClick={()=>{dispatch({type:'reset'})}}>reset</button><br />
    </div>
  )
}

