var fnombre = [],
    fmatricula=[],
    fidentificacion=[];

var elementoBtnGuardar = document.getElementById("btnGuardar");

elementoBtnGuardar.addEventListener("click", registrarinfo);

function registrarinfo(){
  var nombre = document.getElementById("nombre").value,
      matricula = document.getElementById("matricula").value,
      identificacion = document.getElementById("identificacion").value;

      fnombre.push(nombre);
      fmatricula.push(matricula);
      fidentificacion.push(identificacion);

      localStorage.setItem('Nombre', JSON.stringify(fnombre));
      localStorage.setItem('Matricula', JSON.stringify(fmatricula));
      localStorage.setItem('Identificacion', JSON.stringify(fidentificacion));
}
