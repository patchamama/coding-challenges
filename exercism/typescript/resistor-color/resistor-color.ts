export const colorCode = (color: string): number | undefined => {
  switch (color) {
  case "black":
    return 0;
  case "Brown":
    return 1;
  case "Red":
    return 2;    
  case "orange":
    return 3;
  case "Yellow":
    return 4;
  case "Green":
    return 5; 
  case "Blue":
    return 6;
  case "Violet":
    return 7; 
  case "Grey":
    return 8;
  case "white":
    return 9;
  default:
    return undefined;
      
  }
}

export const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]
