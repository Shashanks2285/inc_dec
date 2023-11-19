import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Button from '@mui/material/Button';
const App = ()=>{

  const [num_value,setnum_value] = useState(0);

  const increm = ()=>{
    return(setnum_value(num_value+1))
  }

  const decrem = ()=>{
    if (num_value<=0){
      return(alert("Limit reached : 0"))
    }
    else {
    return(setnum_value(num_value-1))
    }
  }

  return (
    <div className="center_box">
      <h2>{num_value}</h2>
      <div className="buttons">
      <Button  onClick={increm} variant="contained" color="success">
        <AddIcon/>
      </Button>
      <Button onClick={decrem} variant="outlined" color="error">
        <RemoveIcon/>
      </Button>  
      </div>
    </div>
  )

}

export default App;