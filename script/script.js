const charactersGallery$$ = document.querySelector(".characters-gallery");
const miInput$$ = document.querySelector(".miInput");
let arrayPokemons = [];

const getPokemons = async () => {
  for (let i = 1; i < 152; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i)
      .then((res) => res.json())
      .then((myRes) => {
        arrayPokemons.push(myRes);
        arrayPokemons.sort((a,b) => a.order - b.order);
        if (arrayPokemons.length === 151) {
           pintar(arrayPokemons);
        }
      });
  }
};
const pintar = (pokemons) => {
  
  charactersGallery$$.innerHTML = "";

  for (const pokemon of pokemons) {
    //Crear
  
    const divCarta$$ = document.createElement("div");
    const nombreCartas$$ = document.createElement("h2");
    const imgCartas$$ = document.createElement("img");
    const caractCartas$$ = document.createElement("p");

    //Datos

    nombreCartas$$.innerText = pokemon.name;
    imgCartas$$.src = pokemon.sprites.other.dream_world.front_default;
    caractCartas$$.innerText = pokemon.id;

    //Clases

    imgCartas$$.classList.add("imgCartas");
    divCarta$$.classList.add("divCart");
    caractCartas$$.classList.add("caractCartas");
    nombreCartas$$.classList.add("nombre");

    //Integrar

    charactersGallery$$.appendChild(divCarta$$);
    divCarta$$.appendChild(nombreCartas$$);
    divCarta$$.appendChild(imgCartas$$);
    divCarta$$.appendChild(caractCartas$$);
  }
};

const filtrar = () => {

  const arrayFiltrados = [];

  for (const pokemon of arrayPokemons) {
    if (
      pokemon.name.toLowerCase().includes(miInput$$.value.toLocaleLowerCase().trim())) {
      arrayFiltrados.push(pokemon);
    }
  }
  pintar(arrayFiltrados);
};

getPokemons();

miInput$$.addEventListener("keyup", () => filtrar());
