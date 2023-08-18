let input = document.querySelector("input");
let añadir = document.querySelector(".boton_añadir");
let lista = document.querySelector("ul");
let vacio = document.querySelector(".vacio");

añadir.addEventListener("click", (e) => {
  e.preventDefault();
  let tarea = input.value;
  if(tarea !== ""){
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = tarea;
    li.appendChild(p)
    li.appendChild(boton_eliminar())
    lista.appendChild(li);
    input.value = "";
    vacio.style.display = "none"
  }
});

function boton_eliminar(){
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "-"
  botonEliminar.className = "boton_eliminar"
  botonEliminar.addEventListener("click", (e) => {
    let contenido = e.target.parentElement;
    lista.removeChild(contenido);
    let tareas = document.querySelectorAll("li")
    if(tareas.length === 0){
      vacio.style.display = "block"
    }
  })
  return botonEliminar;
}