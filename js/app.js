const Header = () => (
  <header>
    <nav className="navbar">
      <a href="index.html" className="logo-link">
        <p className="logo">MouseBuys</p>
      </a>
      <ul className="navitems">
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
      <a href="ingresar.html" className="login-icon" aria-label="Ingresar">
        <img
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='0.95em'%20height='1em'%20viewBox='0%200%2017%2018'%3e%3cg%20fill='none'%20stroke='currentColor'%20stroke-linejoin='round'%20stroke-width='2'%3e%3cpath%20d='M11.266%204.625a3.125%203.125%200%2010-6.25%200%203.125%203.125%200%20006.25%200Z'%20clip-rule='evenodd'/%3e%3cpath%20d='M15.016%2017.75c0-3.452-3.079-6.25-6.875-6.25-3.797%200-6.875%202.798-6.875%206.25'/%3e%3c/g%3e%3c/svg%3e"
          alt="Usuario"
          className="login-img"
        />
      </a>
      <a href="cart.html" className="cart-icon" aria-label="Cart">
        <img
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='1.37em'%20height='1em'%20viewBox='0%200%2026%2019'%3e%3cg%20fill='none'%20stroke='currentColor'%3e%3cpath%20stroke-linejoin='round'%20stroke-width='2'%20d='m.14%201.171%205.049-.015L9.95%2010.97h10.832l4.024-9.806'/%3e%3cpath%20stroke-width='1.5'%20d='M12.847%2015.837a1.931%201.931%200%2011-3.862%200%201.931%201.931%200%20013.862%200m8.789%200a1.931%201.931%200%2011-3.862%200%201.931%201.931%200%20013.862%200'/%3e%3c/g%3e%3c/svg%3e"
          className="cart-img"
        />
      </a>
    </nav>
  </header>
);

const TopBar = () => (
  <div className="top-bar">¡Hazte con el mejor Mouse, al mejor precio!</div>
);

const Navbar = () => null;

const Footer = () => (
  <footer>
    <p>La Molina, Av. la Fontana 1250, Lima 15024</p>
    <p>mousebuys@gmail.com</p>
    <p>&copy; 2025 MouseBuys. Todos los derechos reservados.</p>
  </footer>
);
