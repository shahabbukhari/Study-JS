// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let content2 = '';
for(let a = 0; a < 7; a++){
	for(let b = 0;b < a; b++){
  	content2 += '#';
  }
  content2 += '\n';
}
console.log(content2);