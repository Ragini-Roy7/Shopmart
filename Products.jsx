
import ProductCard from '../components/ProductCard.jsx'

export default function Products({products=[], addToCart, onSearch}){
  return (
    <div className="container" style={{paddingTop:24}}>
      <h2 style={{margin:'6px 0 18px'}}>All Products</h2>
      <div className="grid">
        {products.map(p=> <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
      </div>
    </div>
  )
}


