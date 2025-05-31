// torneo.js
const Torneo = () => {
  const [correo, setCorreo] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [torneo, setTorneo] = React.useState("");
  const [pago, setPago] = React.useState("");

  const calcularEdad = (fechaNac) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNac);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !nombre || !fechaNacimiento || !torneo || !pago) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const edad = calcularEdad(fechaNacimiento);
    if (edad < 14) {
      alert("Debes tener al menos 14 años para inscribirte.");
      return;
    }

    const costo = 100;
    const pagoNum = parseFloat(pago);
    const vuelto = pagoNum - costo;

    if (isNaN(pagoNum)) {
      alert("El monto entregado no es válido.");
      return;
    }

    if (vuelto < 0) {
      alert(`Pago insuficiente. Faltan S/.${Math.abs(vuelto).toFixed(2)}.`);
    } else {
      alert(`Inscripción exitosa. Vuelto: S/.${vuelto.toFixed(2)}.`);
    }
  };

  return (
    <div className="pagina">
      <nav className="navbar">
        <ul className="navitems">
          <li>
            <a href="index.html">Inicio</a>
          </li>
          <li>
            <a href="productos.html">Productos</a>
          </li>
          <li>
            <a href="contacto.html">Contacto</a>
          </li>
          <li>
            <a href="game.html">Juego</a>
          </li>
          <li>
            <a href="torneo.html">Torneo</a>
          </li>
        </ul>
      </nav>

      <h2>Inscripción Torneo</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Correo:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </label>

        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </label>

        <label>
          Torneo:
          <select
            value={torneo}
            onChange={(e) => setTorneo(e.target.value)}
            required
          >
            <option value="">Selecciona</option>
            <option value="LOL">LOL</option>
            <option value="Fornite">Fornite</option>
            <option value="X">X</option>
          </select>
        </label>

        <label>
          Monto entregado (S/):
          <input
            type="number"
            value={pago}
            onChange={(e) => setPago(e.target.value)}
            required
          />
        </label>

        <button type="submit">Inscribirse</button>
      </form>

      <footer>
        <p>MouseBuys © 2025 - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Torneo />);
