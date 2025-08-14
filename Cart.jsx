
export default function Cart({items=[], removeItem}){
  const total = items.reduce((s,i)=> s + (i.price||0), 0)
  return (
    <div className="container" style={{paddingTop:24}}>
      <h2>Your Cart</h2>
      {items.length===0 ? <p className="helper">Your cart is empty.</p> : (
        <>
          <div className="cart-list">
            {items.map(i=>(
              <div className="cart-item" key={i.cartId}>
                <img src={i.image} alt={i.title}/>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600}}>{i.title}</div>
                  <div className="helper">${i.price.toFixed(2)}</div>
                </div>
                <button className="btn-danger" onClick={()=>removeItem?.(i.cartId)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div>Total Items: {items.length}</div>
            <div style={{fontWeight:700}}>${total.toFixed(2)}</div>
          </div>
        </>
      )}
    </div>
  )
}
