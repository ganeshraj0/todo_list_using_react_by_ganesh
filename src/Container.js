import React from "react";
import { useState } from "react";
const Container = () => {
  const [name,setName] = useState("earn") 
  function ran() {
    const names = ["earn", "grow", "give"];
    const num = Math.floor(Math.random() *3);
    setName(names[num])
  }
 
// const [count,setcount]=useState(999)
// function add ()
// {
//   setcount(count+1)
// }
// function down ()
// {
//   setcount(count-1)
// }
  return (
    <main>
        <p>let {name} money</p>
        <button onClick={()=>ran()} >Button</button>
       
        {/* <button onClick={()=>add()}>+</button>
        <span>
        {count}
        </span>
        <button onClick={()=>down()}>-</button> */}
      
    </main>
  );
};

export default Container;
