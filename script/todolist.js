function display() {

  //Creo los elementos

  let list = document.querySelector(".ula");
  let input$$ = document.querySelector(".imput");
  let li = document.createElement("li");
  let btn = document.createElement("p");

  //Darle cualidades

  btn.innerText = " X";
  btn.classList.add("kit");
  li.innerText = input$$.value;
  li.classList.add("remove");

  //Hijos

  list.appendChild(li);
  list.appendChild(btn);
  li.appendChild(btn);

  //eliminar

  const selectlis = document.querySelectorAll(".remove");
//   const array = [...selectlis];

  btn.addEventListener("click", () => eliminar(li));
}
const eliminar = (elemento) => {
  elemento.remove()
};

