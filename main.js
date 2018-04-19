
//capturamos titulo y descripción
const form = document.getElementById("course-form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let cat1, cat2, cat3;
  let categoria1 = document.getElementById("inlineCheckbox1");
  let categoria2 = document.getElementById("inlineCheckbox2");
  let categoria3 = document.getElementById("inlineCheckbox3");

  if (categoria1.checked) {
    cat1 = categoria1.value;
  }

  if (categoria2.checked) {
    cat2 = categoria2.value;
  }

  if (categoria3.checked) {
    cat3 = categoria3.value;
  }


  create_card(title, description, cat1, cat2, cat3);
  form.reset();
})

//seleccionamos el lugar donde se cargan las tareas
const row = document.querySelector(".row");
let div = null;

function create_card(title, description, cat1, cat2, cat3){
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
  span1.textContent = cat1;

  let span2 = document.createElement("span");
  span2.className = "badge badge-pill badge-light";
  span2.textContent = cat2;

  let span3 = document.createElement("span");
  span3.className = "badge badge-pill badge-light";
  span3.textContent = cat3;

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
  footer.addEventListener("click", delete_card);

  card.appendChild(body);
  card.appendChild(footer);

  div.appendChild(card);

  row.appendChild(div);
}

function delete_card(e){
  // el padre y el elemento a eliminar (hijo del padre)
  let ancestro = get_ancestro(e.target, 4);
  row.removeChild(div);
}

function get_ancestro(ancestro, level){
  if(level == 0) {
    return ancestro;
  }
    level --;
    return get_ancestro(ancestro.parentElement, level);
}
