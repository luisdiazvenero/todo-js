
//capturamos titulo y descripción
const form = document.getElementById("course-form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  console.log(title);
  console.log(description);

  create_card(title, description);
})

//seleccionamos el lugar donde se cargan las tareas
const row = document.querySelector(".row");
let div = null;

function create_card(title, description, categoria1, categoria2, categoria3){
  // creamos los elementos del layout de card
  div = document.createElement("div");
  div.className = "col-sm-6 mb-4";

  let card = document.createElement("div");
  card.className = "card";

  let body = document.createElement("div");
  body.className = "card-body";

  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = title;

  let span1 = document.createElement("span");
  span1.className = "badge badge-pill badge-light";
  span1.textContent = "Categoria 1";

  let span2 = document.createElement("span");
  span2.className = "badge badge-pill badge-light";
  span2.textContent = "Categoria 2";

  let span3 = document.createElement("span");
  span3.className = "badge badge-pill badge-light";
  span3.textContent = "Categoria 3";

  let p = document.createElement("p");
  p.textContent = description;

  let footer = document.createElement("div");
  footer.className = "card-footer text-right";

  let button = document.createElement("button");
  button.className = "btn btn-danger btn-sm";
  button.type = "submit";
  button.textContent = "Borrar";

  //armamos el card
  body.appendChild(h5);
  body.appendChild(span1);
  body.appendChild(span2);
  body.appendChild(span3);
  body.appendChild(p);

  footer.appendChild(button);

  card.appendChild(body);
  card.appendChild(footer);

  div.appendChild(card);

  row.appendChild(div);
}
