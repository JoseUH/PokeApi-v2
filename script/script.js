const charactersGallery$$ = document.querySelector(".characters-gallery");

// const miInput$$ = document.querySelector(".miInput");
// let arrayPokemons = [];

// const getPokemons = async () => {

//   for (let i = 1; i < 152; i++) {

//     fetch("https://pokeapi.co/api/v2/pokemon/" + i)
//       .then((res) => res.json())
//       .then((myRes) => {

//         arrayPokemons.push(myRes);
//         arrayPokemons.sort((a, b) => a.order - b.order);

//         if (arrayPokemons.length === 151) {

//           pintar(arrayPokemons);
//         }
//       });
//   }
  
// };

// const pintar = (pokemons) => {

//   charactersGallery$$.innerHTML = "";

//   for (const pokemon of pokemons) {

//     //Crear

//     const divCarta$$ = document.createElement("div");
//     const nombreCartas$$ = document.createElement("h2");
//     const imgCartas$$ = document.createElement("img");
//     const caractCartas$$ = document.createElement("p");

//     //Datos

//     nombreCartas$$.innerText = pokemon.name;
//     imgCartas$$.src = pokemon.sprites.other.dream_world.front_default;
//     caractCartas$$.innerText = pokemon.id;

//     //Clases

//     imgCartas$$.classList.add("imgCartas");
//     divCarta$$.classList.add("divCart");
//     divCarta$$.setAttribute("data-aos", "fade-up");

//     caractCartas$$.classList.add("caractCartas");
//     nombreCartas$$.classList.add("nombre");

//     // //Integrar

//     charactersGallery$$.appendChild(divCarta$$);
//     divCarta$$.appendChild(nombreCartas$$);
//     divCarta$$.appendChild(imgCartas$$);
//     divCarta$$.appendChild(caractCartas$$);

//     // divCarta$$.innerHTML = `
//     // <h2 class="nombre">${pokemon.name}</h2>
//     // <img class="imgCartas" src="${pokemon.image}" alt="${pokemon.name}">
//     // <p class="caractCartas">${pokemon.id}</p>`;
//   }
// };

// const filtrar = () => {

//   const arrayFiltrados = [];

//   for (const pokemon of arrayPokemons) {
//     if (pokemon.name.toLowerCase().includes(miInput$$.value.toLocaleLowerCase().trim())) {
//       arrayFiltrados.push(pokemon);
//     }
//   }

//   pintar(arrayFiltrados);

// };

//  getPokemons();
//  AOS.init();

// miInput$$.addEventListener("keyup", () => filtrar());




const getPokemons = async () => {

  const pokemons= []
  for (let i = 1; i < 152; i++) {

  const pokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  const pokemonsJson = await pokemonsResponse.json();
  pokemons.push(pokemonsJson);
  
  }
  return pokemons;
}


const pintar = (pokemons) => {

  charactersGallery$$.innerHTML = "";

  for (const pokemon of pokemons) {

    const divCarta$$ = document.createElement("div");
  
    divCarta$$.classList.add("divCart");
    divCarta$$.classList.add("flip-card");

    
    divCarta$$.setAttribute("data-aos", "fade-up");

    charactersGallery$$.appendChild(divCarta$$);
    if (pokemon.type == 'grass') {
      divCarta$$.classList.add('grasa');
    }
    if (pokemon.type == 'fire') {
      divCarta$$.classList.add('fuegote');
    }
    if (pokemon.type == 'water') {
      divCarta$$.classList.add('awita');
    }
    if (pokemon.type == 'bug') {
      divCarta$$.classList.add('bixo');
    }
    if (pokemon.type == 'normal') {
      divCarta$$.classList.add('normal');
    }
    if (pokemon.type == 'poison') {
      divCarta$$.classList.add('veneno');
    }
    if (pokemon.type == 'electric') {
      divCarta$$.classList.add('electrico');
    }
    if (pokemon.type == 'ground') {
      divCarta$$.classList.add('tierra');
    }
    if (pokemon.type == 'fairy') {
      divCarta$$.classList.add('hada');
    }
    if (pokemon.type == 'fighting') {
      divCarta$$.classList.add('luxa');
    }
    if (pokemon.type == 'psychic') {
      divCarta$$.classList.add('acido');
    }
    if (pokemon.type == 'rock') {
      divCarta$$.classList.add('pedrolo');
    }
    if (pokemon.type == 'ghost') {
      divCarta$$.classList.add('casper');
    }
    if (pokemon.type == 'ice') {
      divCarta$$.classList.add('helado');
    }
    if (pokemon.type == 'dragon') {
      divCarta$$.classList.add('dragon');
    }
    divCarta$$.innerHTML = `
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img class="imgCartas" src="${pokemon.image}" alt="${pokemon.name}">
    <h2 class="nombre">${pokemon.name}</h2>
    
    </div>
    <div class="flip-card-back">
    <p class="caractCartas">${pokemon.id}</p>
    <img class="imgCartas" src="${pokemon.img}" alt="${pokemon.name}">

     
    </div>
  </div>
    
   
    `;
  }
};


const mapPokemons = (pokemons) => {
  const mappedPokemons = pokemons.map((pokemon) => ({
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      img:  pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default,
      type: pokemon.types[0].type.name,

      id: pokemon.id
  }))

  return mappedPokemons;
}

const filtrar = (nombre, pokemons) => {

     const filteredPokemons = pokemons.filter( (pokemon) => pokemon.name.toLowerCase().includes(nombre.toLowerCase())); 

     pintar(filteredPokemons);

  };


const setListener = (pokemons) => {
  const miInput$$ = document.querySelector(".miInput");
  miInput$$.addEventListener("keyup", () => filtrar(miInput$$.value, pokemons));
  
}

const init = async () => {

  const pokemons = await getPokemons();
  // console.log(pokemons)

  const mappedPokemons = mapPokemons(pokemons);
  // console.log(mappedPokemons);

  pintar(mappedPokemons);

  setListener(mappedPokemons);
  AOS.init();
  
}

init();
