export const getColor = (type) => {
    switch(type) {
      case "bug":
        return "#76A866"; /*"#316520";*/
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D"; /*"#F44900";*/ 
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#729F92";  /*"#70B873"; */
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";  /*"#8A8A8A";*/
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF"; /*"#33A4F5";*/
      default:
        return "#8A8A8A";
    }
  };