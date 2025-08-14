
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register(){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [confirm,setConfirm]=useState('')
  const [err,setErr]=useState('')
  const navigate = useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    if(!username || !password){ setErr('All fields are required.'); return }
    if(password!==confirm){ setErr('Passwords do not match.'); return }
    localStorage.setItem('user', username)
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <h2>Create account</h2>
        {err && <div className="helper" style={{color:'var(--danger)'}}>{err}</div>}
        <label className="input">
          <span>Username</span>
          <input value={username} onChange={e=>setUsername(e.target.value)} />
        </label>
        <label className="input">
          <span>Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </label>
        <label className="input">
          <span>Confirm Password</span>
          <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
        </label>
        <button className="btn-primary">Register</button>
        <div className="helper">Already have an account? <Link to="/login">Login</Link></div>
      </form>
    </div>
  )
}
