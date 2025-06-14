const Cart = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const saved = localStorage.getItem("carritoItems");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  const total = items.reduce((sum, item) => {
    const number = parseFloat(item.precio.replace("S/.", "").replace(",", "").trim());
    return sum + number;
  }, 0);

  const vaciarCarrito = () => {
    localStorage.removeItem("carritoItems");
    setItems([]);
  };

  return (
    <section className="cart">
      <h2>🛒 Carrito de compras</h2>

      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-layout">
          {}
          <div className="cart-items box">
            <h3>Productos</h3>
            {items.map((item, index) => (
              <div key={index} className="cart-product">
                <img src={item.url} alt={item.nombre} />
                <div className="cart-product-info">
                  <strong>{item.nombre}</strong>
                  <span>{item.precio}</span>
                </div>
              </div>
            ))}
          </div>

          {}
          <div className="cart-summary box">
            <h3>Resumen</h3>
            <p>Total: <strong>S/. {total.toFixed(2)}</strong></p>
            <button onClick={vaciarCarrito} className="btn-agregar">
              Vaciar carrito 🗑️
            </button>
            <button className="btn-pagar">
              Pagar ahora 💳
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
