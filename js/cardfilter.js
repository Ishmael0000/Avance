const CardFilter = () => {
  const [productos, setProductos] = React.useState([]);
  const [marca, setMarca] = React.useState("");
  const [precioMax, setPrecioMax] = React.useState(9999);

  React.useEffect(() => {
    fetch("./data.productos.json?nocache=" + new Date().getTime())
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const agregarAlCarrito = (producto) => {
    const carritoActual =
      JSON.parse(localStorage.getItem("carritoItems")) || [];
    carritoActual.push(producto);
    localStorage.setItem("carritoItems", JSON.stringify(carritoActual));
    alert(`"${producto.nombre}" fue añadido al carrito.`);
  };

  const productosFiltrados = productos
    .filter((p) =>
      marca ? p.nombre.toLowerCase().includes(marca.toLowerCase()) : true
    )
    .filter((p) => {
      const precioNum = Number(p.precio.replace("S/. ", "").trim());
      return precioNum <= precioMax;
    });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="filtros" style={{ marginBottom: "1rem" }}>
        <select onChange={(e) => setMarca(e.target.value)} value={marca}>
          <option value="">Todas las marcas</option>
          <option value="Logitech">Logitech</option>
          <option value="Razer">Razer</option>
          <option value="Pulsar">Pulsar</option>
          <option value="Lamzu">Lamzu</option>
        </select>

        <select
          onChange={(e) => setPrecioMax(Number(e.target.value))}
          value={precioMax}
          style={{ marginLeft: "1rem" }}
        >
          <option value="9999">Cualquier precio</option>
          <option value="200">Hasta S/. 200</option>
          <option value="300">Hasta S/. 300</option>
          <option value="400">Hasta S/. 400</option>
          <option value="500">Hasta S/. 500</option>
        </select>
      </div>

      <div className="contenedor productos">
        {productosFiltrados.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          productosFiltrados.map(({ nombre, url, precio }) => (
            <div key={nombre} style={{ textAlign: "center" }}>
              <img
                src={url}
                alt={nombre}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                {nombre}
              </div>
              <div className="precio" style={{ margin: "0.5rem 0" }}>
                {precio}
              </div>
              <button
                className="btn-agregar"
                onClick={() => agregarAlCarrito({ nombre, precio, url })}
              >
                Añadir al carrito
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
