import React from "react";

const button = ():JSX.Element =>{
  function testEvent() {
    fetch('/test2')
    .then(data => {
      console.log(data.json())
    })
  }
  return <div>
    <button onClick={testEvent}>버튼</button>
  </div>
};
export default button