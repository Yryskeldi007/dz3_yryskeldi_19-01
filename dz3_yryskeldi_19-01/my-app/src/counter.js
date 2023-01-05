import { useState } from "react";

function Caunter() {
    
    const [count,setCount]=useState(1)
    const plus=()=>{
        setCount(count+1)
    }


    return (
      <div className="Caunter">
        {count}

        <button className="btn" onClick={plus}>Plus</button>  
      </div>
    );
  }
  
  export default Caunter;
  