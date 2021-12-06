import React,{useState} from "react";
function App() {

  const [slices, setSlices] = useState(0);

  const add = () => {
    setSlices((prevSlices) => prevSlices +1);

  }
  const minus = () => {
    setSlices((prevSlices) => prevSlices -1);
    
  }

  return (
    <div>
      {slices}
      <div style={{textAlign:"center"}}>

      <button onClick={add}> Add</button>
      <button onClick={minus}> Minus</button>
      </div>

      
    </div>
  );
}

export default App;
