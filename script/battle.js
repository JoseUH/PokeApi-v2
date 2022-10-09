const charactersGallery$$ = document.querySelector(".characters-gallery");
const charactersGallery1$$ = document.querySelector(".characters-gallery1");
const charactersGallery2$$ = document.querySelector(".characters-gallery2");
const oak$$ = document.querySelector(".funcionOAK")
const dialogo$$ = document.querySelector(".bubble")
  
let luchadores = [];
count = 0;
contador=0
let player1;
let player2;
const getPokemons = async () => {
  const pokemons = [];
  for (let i = 1; i < 152; i++) {
    const pokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${i}`
    );
    const pokemonsJson = await pokemonsResponse.json();
    pokemons.push(pokemonsJson);
  }
  return pokemons;
};
 const hablar = () => {
  contador++
  if (contador===1) {
    dialogo$$.innerText="¿Ves el espacio en blanco justo debajo de mi? Es para que busques a tu compañero de batalla y a un rival"
  }
  if (contador===2) {
    dialogo$$.innerText="una vez elegidos, ya podras ver a tu nuevo compañero, solo te hace falta pulsar el boton y empezar a luchar.  ¿Sencillo verdad?"
  }
 }
 dialogo$$.addEventListener("click",hablar)
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
    divCarta$$.addEventListener("click", () => choose(pokemon));
  }
};

const pintar2 = (a, b) => {
  
  if (count === 2) {
    const miInput$$ = document.querySelector(".miInput");
    miInput$$.remove();
    charactersGallery$$.remove();
    oak$$.remove()
    charactersGallery1$$.style.marginTop ="100px"
    
  }

  const divCarta$$ = document.createElement("div");

  charactersGallery1$$.appendChild(divCarta$$);

  divCarta$$.innerHTML = `
      
      <img class="imgCartas1" src="${a.img}" alt="${a.name}">
      `;
 
  const button$$ = document.createElement("button");
  button$$.innerText = "A luchar!";
  button$$.className="btn"
  charactersGallery1$$.appendChild(button$$);
  button$$.addEventListener("click", () => {
    lucha(a, b), 1000;
    eliminar(button$$);
 
  });
  
  const divCarta1$$ = document.createElement("div");

  charactersGallery1$$.appendChild(divCarta1$$);

  divCarta1$$.innerHTML = `

      <img class="imgCartas1" src="${b.img}" alt="${b.name}">
      `;
};
const eliminar =(nodo)=>{
  nodo.remove()
}
const choose = (pokemon) => {
  count++;

  if (player1) {
    player2 = pokemon;
    pintar2(player1, player2);
    
  } else {
    player1 = pokemon;
  }

  //

  //  console.log(player1,player2);
};
const lucha = (a, b) => {
  
  let damage = Math.floor(Math.random() * a.attack) + 1;
  b.hp = b.hp - damage;
  
    const p$$ = document.createElement("p");
    p$$.innerText= `${a.name} esta atacando con ${damage} de daño, solo le quedan ${a.hp} de vida`

    const p1$$ = document.createElement("p");
    p1$$.innerText= `${b.name} esta atacando con un daño de ${damage}, solo le quedan ${b.hp} de vida`
   

    charactersGallery2$$.appendChild(p$$);
    charactersGallery2$$.appendChild(p1$$);
  
  
  console.groupCollapsed()
  console.log(a)
  console.log(b);
  console.groupEnd()

  if (a.hp >= 0 && b.hp >= 0) {
    lucha(b, a);
  } else {
    if (a.hp<=0) {
      setTimeout(function() { alert(a.name + " gano la partida"); }, 1000);
      
    }
    if (b.hp<=0) {
      setTimeout(function() { alert(b.name + " gano la partida"); }, 1000);

    }
  }

    
    

};

const mapPokemons = (pokemons) => {
  const mappedPokemons = pokemons.map((pokemon) => ({
    name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      img:  pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default,
      type: pokemon.types[0].type.name,

      id: pokemon.id,
    attack: Math.floor(Math.random() * 100),
    hp: 100,
  }));

  return mappedPokemons;
};

const filtrar = (nombre, pokemons) => {
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(nombre.toLowerCase())
  );

  pintar(filteredPokemons);
};

const setListener = (pokemons) => {
  const miInput$$ = document.querySelector(".miInput");
  miInput$$.addEventListener("keyup", () => filtrar(miInput$$.value, pokemons));
};

const init = async () => {
  const pokemons = await getPokemons();
  // console.log(pokemons)

  const mappedPokemons = mapPokemons(pokemons);
  // console.log(mappedPokemons);

  // pintar(mappedPokemons);

  setListener(mappedPokemons);
};

init();
