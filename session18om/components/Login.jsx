import React, { useRef, useState } from 'react'

const Login = () => {
    const username = useRef()
    const password = useRef()
    const [product, setproduct] = useState()
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username.current.value)
    }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Username' ref={username}/>
      <br /><br />
      <input type="password" placeholder='Password' ref={password}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default Login