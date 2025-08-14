
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container" style={{paddingTop:24}}>
      <div className="card" style={{overflow:'hidden'}}>
        <div className="img-wrap" style={{aspectRatio:'16/6'}}>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" alt="hero"/>
        </div>
        <div className="content">
          <h2 style={{margin:'6px 0'}}>Welcome to ShopMate</h2>
          <p className="helper">Discover curated products with a clean, modern shopping UI.</p>
          <div style={{display:'flex', gap:10}}>
            <Link to="/products" className="btn-primary">Browse Products</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
