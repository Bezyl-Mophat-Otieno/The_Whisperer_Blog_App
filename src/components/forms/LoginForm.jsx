import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import   './LoginForm.css';

function LoginForm() {
  const [loginEmail,setEmail] = useState('')
  const[loginPassword,setPassword] = useState('')
  const [emailInputErr,setemailInputErr] = useState(false)
  const [passwordInputErr,setpasswordInputErr] = useState(false)

    let validationErrorCount = 0;
    const  navigate = useNavigate()

  

  
  
  const inputValidation = ()=>{
  
  if (loginEmail === ''){
  setemailInputErr(true)
  validationErrorCount++
  }else{
  setemailInputErr(false)
  }
  if (loginPassword === ''){
  setpasswordInputErr(true)
  validationErrorCount++
  }else{
  setpasswordInputErr(false)
  }
  return validationErrorCount;
  }
  const handleLogin= (event) =>{
      event.preventDefault()

  
    
    }
  return (
  <>
   <form onSubmit={handleLogin}>
  <div class="mb-3 ms-5 me-5 d-flex ">
    <label for="exampleInputEmail1" class="form-label me-4"><FontAwesomeIcon icon={faNewspaper}/></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Email" aria-label="Email" value={loginEmail} onChange={(event)=>{setEmail(event.target.value)}}/>
  </div>
  { emailInputErr  &&  <div  className="form-text text-danger d-flex justify-content-center mb-3">This field cannot be empty </div> }
  <div class="mb-3 ms-5 me-5 d-flex">
    <label for="exampleInputPassword1" class="form-label me-4"><FontAwesomeIcon icon={faKey}/></label>
    <input type="password" class="form-control" id="exampleInputPassword1"
     placeholder="Password" aria-label="Password" value={loginPassword} onChange={(event)=>{setPassword(event.target.value)}}/>
  </div>
    {passwordInputErr  &&  <div className="form-text text-danger d-flex justify-content-center mb-3">This field cannot be empty </div> }

  <div class=" d-flex justify-content-center mb-3 ">
  <button type="submit" class="btn btnLogin  ">Login <FontAwesomeIcon icon={faSignInAlt} /></button>
  </div>
</form>         
  </>
  )
}

export default LoginForm