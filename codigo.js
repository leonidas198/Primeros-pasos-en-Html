function actualizarFecha() {
    var fecha = new Date();
    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechaFormateada = fecha.toLocaleDateString('es-AR', opciones);
  
    
    document.getElementById("fecha").innerHTML = fechaFormateada;
  }
  
  
  setInterval(actualizarFecha, 1000);

  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = time;
  }

  setInterval(updateTime, 1000);
 
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("active");
  }