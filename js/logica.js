llenartabla();

function llenartabla(){
  var fnombre = JSON.parse(localStorage.getItem('Nombre')),
  fmatricula= JSON.parse(localStorage.getItem('Matricula')),
  fidentificacion= JSON.parse(localStorage.getItem('Identificacion'));

  var fila = ["<tr><td>"+fnombre+"</td><td>"+fmatricula+"</td><td>"+fidentificacion+"</td><td>x</td></tr>"];
  var crear = document.createElement("TR");
  crear.innerHTML=fila;
  document.getElementById("tabla").appendChild(crear);

  var form = document.getElementById("formulario").reset();

  }
