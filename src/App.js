import React ,{useState}from "react";
import "./style.css";

export default function App() {

let [name, setName] = useState('monday')
let [state, setState] = useState(true)
function changeName(){
  setName("tuesday")
  setState(false)
}


  return (
    <div>
      <button onClick={changeName}> Change Name</button>
      <button onClick={()=>{setName('monday')}}> Reset</button>
      <div>{name}</div>
      {
        state
      ?<div style={{backgroundColor:"red"}}> When there is monday </div>
      :<div style={{backgroundColor:"green"}}>When there is Tuesday</div>

      }
    </div>
  );
}
