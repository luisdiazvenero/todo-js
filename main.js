
//capturamos titulo y descripción
const form = document.getElementById("course-form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  console.log(title);
  console.log(description);

  
})
