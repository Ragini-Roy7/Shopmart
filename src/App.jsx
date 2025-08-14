
import { Routes, Route } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { products as seed } from './data/products.js'

export default function App(){
  const [query,setQuery] = useState('')
  const [cart,setCart]   = useState(()=>JSON.parse(localStorage.getItem('cart')||'[]'))
  const [products] = useState(seed)

  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])

  const addToCart = (p)=> setCart((c)=> [...c, {...p, cartId:crypto.randomUUID()}])
  const removeFromCart = (cartId)=> setCart((c)=> c.filter(i=>i.cartId!==cartId))

  const filtered = useMemo(()=>{
    const q=query.trim().toLowerCase()
    if(!q) return products
    return products.filter(p=> p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  },[query,products])

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onSearch={setQuery}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={filtered} addToCart={addToCart} onSearch={setQuery} />} />
        <Route path="/cart" element={<Cart items={cart} removeItem={removeFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <footer>© {new Date().getFullYear()} ShopMate — demo build</footer>
    </>
  )
}
