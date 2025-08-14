
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar({cartCount=0, onSearch}){
  const navigate = useNavigate()
  const [term,setTerm]=useState('')
  const [user,setUser]=useState(()=>localStorage.getItem('user'))

  useEffect(()=>{ onSearch?.(term) },[term])

  const logout=()=>{ localStorage.removeItem('user'); setUser(null); navigate('/login') }

  return (
    <div className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <span className="logo" /> <span>ShopMate</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=> isActive ? 'active' : ''}>Products</NavLink>
          <NavLink to="/cart" className={({isActive})=> isActive ? 'active' : ''}>Cart</NavLink>
        </nav>

        <div className="grow" />

        <div className="search">
          <input placeholder="Search products..." value={term} onChange={(e)=>setTerm(e.target.value)} />
        </div>

        <div className="actions">
          <Link to="/cart" className="badge">Cart <span className="count">{cartCount}</span></Link>
          {user ? (
            <>
              <span className="btn-ghost">Hi, {user}</span>
              <button className="btn-ghost" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-ghost">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
