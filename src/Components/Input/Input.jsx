import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  console.log(input)
const handleAddToTask=(e)=>{

    e.preventDefault()
}
  return (
    <div>
      <div>
        {" "}
        <form>
          <input  className="border rounded px-2"    type="text" placeholder="Add a task" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={handleAddToTask}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default Input;
