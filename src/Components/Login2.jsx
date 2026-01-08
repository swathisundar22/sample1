import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login2() {
    const navigate=useNavigate();
    function handle(){
        navigate('/about');
    }

  return (
    <div>
<button onClick={handle}>Login2</button>
    </div>
  )
}

export default Login2