import bug from "../Assets/PokeType/bug.png";
import dark from "../Assets/PokeType/dark.png";
import dragon from "../Assets/PokeType/dragon.png";
import electric from "../Assets/PokeType/electric.png";
import fairy from "../Assets/PokeType/fairy.png";
import fighting from "../Assets/PokeType/fighting.png";
import fire from "../Assets/PokeType/fire.png";
import flying from "../Assets/PokeType/flying.png";
import ghost from "../Assets/PokeType/ghost.png";
import grass from "../Assets/PokeType/grass.png";
import ground from "../Assets/PokeType/ground.png";
import ice from "../Assets/PokeType/ice.png";
import normal from "../Assets/PokeType/normal.png";
import poison from "../Assets/PokeType/poison.png";
import psychic from "../Assets/PokeType/psychic.png";
import rock from "../Assets/PokeType/rock.png";
import steel from "../Assets/PokeType/steel.png";
import water from "../Assets/PokeType/water.png";

  export const getType = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };
