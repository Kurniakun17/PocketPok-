import './style/stylesheet.css';
import { upperCaseFirst } from "upper-case-first";
import axios from 'axios';

let prevtype=""

class PokeImage extends HTMLElement{
};

customElements.define("poke-image", PokeImage);

function makePoke(PokeData){
  const pokeInfo = document.getElementById('poke-info');

  pokeInfo.innerHTML = ""
  
  if(prevtype){
    pokeInfo.classList.remove(prevtype)
  }

  let type = PokeData.types[0].type.name;
  prevtype = type
  pokeInfo.classList.add(type)

  const pokeId = document.createElement('h4'); 
  const pokeType = document.createElement('h4');
  const pokeImg = document.createElement('poke-image'); 
  const pokeName = document.createElement('h3');
  
  pokeId.classList.add('poke-id');
  
  if(PokeData.id < 10){
    pokeId.innerText = "#00"; 
  }else if(PokeData.id < 100){
    pokeId.innerText = "#0";
  }else{
    pokeId.innerText = "#";
  }

  pokeId.innerText += `${PokeData.id}`;
  pokeName.innerText = upperCaseFirst(PokeData.name);

  pokeImg.innerHTML = `
  <img src=${PokeData.sprites.front_default} width="250em">
  `

  console.log(PokeData);

  pokeType.innerText = 'Types : ';

  for(let i = 0; i < PokeData.types.length;i++){
    pokeType.innerText += upperCaseFirst(PokeData.types[i].type.name);
    if(i != PokeData.types.length - 1){
      pokeType.innerText += ", ";
    }
  }

  pokeInfo.appendChild(pokeId);
  pokeInfo.appendChild(pokeImg);
  pokeInfo.appendChild(pokeName);
  pokeInfo.appendChild(pokeType)

  const pokeMisc = makePokeMisc(PokeData);
  pokeInfo.appendChild(pokeMisc);
}

function makePokeMisc(PokeData){
  const pokeMisc = document.createElement('div');
  const pokeMiscHW = document.createElement('div');
  pokeMisc.classList.add("poke-misc")
  pokeMiscHW.classList.add('poke-miscHW');
  pokeMiscHW.classList.add('flex');

  const pokeHeight = document.createElement('p');
  const pokeWeight = document.createElement('p');

  const height = parseInt(PokeData.height)/10;
  const weight = parseInt(PokeData.weight)/10;
  
  pokeHeight.innerText = `Height : ${height} m`;
  pokeWeight.innerText = `Weight : ${weight} kg`;
  
  pokeMiscHW.appendChild(pokeHeight);
  pokeMiscHW.appendChild(pokeWeight);

  const statsBar = makeStats(
    PokeData.stats[0].base_stat,
    PokeData.stats[1].base_stat,
    PokeData.stats[2].base_stat,
    PokeData.stats[3].base_stat,
    PokeData.stats[4].base_stat,
    PokeData.stats[5].base_stat
  );

  pokeMisc.appendChild(pokeMiscHW);
  
  // for(let i = 0; i < PokeData.types.length;i++){
  //   pokeType.innerText += upperCaseFirst(PokeData.types[i].type.name);
  //   if(i != PokeData.types.length - 1){
  //     pokeType.innerText += ", ";
  //   }
  // }

  pokeMisc.appendChild(statsBar)

  return pokeMisc;
}

function makeStats(hp, att, def, spatt, spdef, speed){
  const container = document.createElement('div');
  container.classList.add('stats-bar-container');
  container.classList.add('flex');

  const makeBar = (args, title) => {
    const statBarContainer = document.createElement('div');
    const barContainer = document.createElement('div');
    const barStat = document.createElement('div');
    const barTitle = document.createElement('p');

    barContainer.classList.add("bar-container");
    barStat.classList.add("bar-stat");
    barTitle.innerText = title;

    barStat.style.width = `${(parseInt(args)/255) * 100}%`;

    barContainer.appendChild(barStat);
    barContainer.style.marginTop = "2px";

    statBarContainer.appendChild(barTitle);
    statBarContainer.appendChild(barContainer);
    statBarContainer.style.textAlign="left";

    return container.appendChild(statBarContainer);
  }

  makeBar(hp, "HP");
  makeBar(att, "Defense");
  makeBar(def, "Attack");
  makeBar(spatt, "SP Attack");
  makeBar(spdef, "SP Defense");
  makeBar(speed, "Speed");

  return container;
}

document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();
  const pokeInput = document.getElementById('poke-input');
  const pokename= pokeInput.value.toLowerCase();
  pokeInput.innerText = "";
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`).then(response=>response.data)
  .then(response=>makePoke(response))
  .catch(error=>console.log(error))

});

document.addEventListener('DOMContentLoaded', function(){
})