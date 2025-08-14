
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [err,setErr]=useState('')
  const navigate = useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    if(!username || !password){ setErr('Please enter username and password.'); return }
    // demo auth: accept anything
    localStorage.setItem('user', username)
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <h2>Login</h2>
        {err && <div className="helper" style={{color:'var(--danger)'}}>{err}</div>}
        <label className="input">
          <span>Username</span>
          <input value={username} onChange={e=>setUsername(e.target.value)} />
        </label>
        <label className="input">
          <span>Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </label>
        <button className="btn-primary">Sign In</button>
        <div className="helper">No account? <Link to="/register">Register</Link></div>
      </form>
    </div>
  )
}
