function registrarUsuario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("confirmar").value;

  if (contrasena.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return false;
  }

  if (contrasena !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  alert("¡Registro exitoso!");
  document.querySelector("form").reset();
  return true;
}
