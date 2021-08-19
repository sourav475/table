import React from "react";
import Tables from './components/tables'

const App= () =>{
  return (
    <div className="App">
      <h3 style={{textAlign: 'center', backgroundColor: 'blue', marginBottom: '20px', marginLeft: '300px' ,padding: '20px', width: '50%', float: 'center', borderRadius: '20px'}}>Table</h3>
      <Tables />
    </div>
  );
}

export default App;
