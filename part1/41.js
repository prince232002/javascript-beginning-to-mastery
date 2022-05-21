// object destructuring
const band = {
  bandName: "led zepplin",
  cbandName: "led zepplign",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong:var1, ...restProps } = band;
console.log(bandName);
console.log(restProps);
//wrong syntax 
console.log(var1);
console.log(band);
/* 
restprops
 */