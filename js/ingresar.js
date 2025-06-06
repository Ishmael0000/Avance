function iniciarSesion(event) {
  event.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  if (!correo || !contrasena) {
    alert("Por favor, completa ambos campos.");
    return false;
  }

  alert(`Bienvenido, ${correo.split("@")[0]} 🎉`);
  return false;
}