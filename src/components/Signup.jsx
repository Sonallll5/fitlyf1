import { Button, TextField } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  var[inputs,setInputs]
  =useState({"FIrst name":'',"last name":'',"Email":'',"password":''})

  const inputHandler = (e) => { 
    const {name,value}=e.target 
    setInputs((inputs) => ({...inputs,[name]:value})) 
   console.log(inputs) 
    
  } 
const addHandler =() =>{ 
  console.log("Clicked") 
  
    console.log(inputs) 
    axios.post("http://localhost:3005/cnew",inputs) 

    .then((response) =>{ 
      alert("Record Saved") 
    }) 
    .catch(err=>console.log(err))
  }
  return (
   
    <div className="signup-container">
    <h1>Sign Up</h1>
    <div className="input-container">
      <TextField className="input-field" label="First Name" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField className="input-field" label="Last Name" variant="outlined" /><br></br><br></br>
      <TextField className="input-field" label="Email" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField className="input-field" label="Password" variant="outlined" />
    </div>
    <br></br><Button variant="contained" color="primary" className="signup-button">Sign Up</Button>
    </div>

  )
}

export default Signup