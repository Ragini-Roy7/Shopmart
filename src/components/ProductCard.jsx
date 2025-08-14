
export default function ProductCard({product, onAdd}){
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={product.image} alt={product.title} loading="lazy"/>
      </div>
      <div className="content">
        <div style={{minHeight:48}}>{product.title}</div>
        <div className="price">${product.price.toFixed(2)}</div>
        <button className="btn-primary btn-block" onClick={()=>onAdd?.(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
