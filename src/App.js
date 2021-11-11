import React from "react";
import './App.css';

function App() {
  let currentData=new Date();
  currentData= currentData.getHours();
  let greeting='';
  const style={};

  if (currentData >=3 && currentData<12) {
    greeting="Good Morning";
    style.color='green';
  } else if (currentData >=12 && currentData <17){
    greeting="Good Afternoon";
    style.color='blue';
  } else if (currentData >=17 && currentData <19 ) {
    greeting="Good Evening";
    style.color='orange';
  } else {
    greeting="Good Night";
    style.color='black';
  }
  return (
    <div className="App">
      <h1>Hellow sir or madam <span style={style}><u>{greeting}</u></span></h1>
    </div>
  );
}

export default App;
