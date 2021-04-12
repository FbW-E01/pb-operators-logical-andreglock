const isDogBetter = true;
const isCatBetter = false;

console.log('1a:', (isDogBetter && isCatBetter)); // True and False is False
console.log('1b:', (isDogBetter || isCatBetter)); // True or False is True
console.log('1c:', ! (isDogBetter && isCatBetter)); // True and False is False, which is not True

const atoms = 954;
const sandGrains = 647;
const startsInSky = 740;

console.log('3a:', (atoms > startsInSky) && (atoms > sandGrains)); // True and True is True
console.log('3b:', (atoms !== sandGrains)); // True because they are different
console.log('3c:', (startsInSky > sandGrains) || (startsInSky > atoms)); // True or False is True
console.log('3d:', (atoms === startsInSky) || (atoms !== sandGrains)); // False or True is True
console.log('3e:', (atoms >= 10) && (sandGrains <= 10)); // True and False is False
console.log('3f:', (atoms * startsInSky < 100) || (atoms * sandGrains > 100)); // False or True is True


