const columns = document.getElementsByClassName('column');

//Represents the "balls" used in a Galton Board

let cases = [];
let numOfCases = 15000;

// Adds the number of cases to the "cases" array with a property
// that tracks the position of each case

for (var i = 0; i < numOfCases; i++) {
    cases.push({
        position: 0
    });
}

//Loops through the cases and randomizes their position.

function directionRandomizer(stages) {

  for (var e = 0; e < stages; e++) {

    for (var i = 0; i < numOfCases; i++) {
      let move = Math.round(Math.random());

      if (move === 1) {
        cases[i].position = cases[i].position + 1;
      } else {
        cases[i].position = cases[i].position - 1;
      }
    }
  }
}



directionRandomizer(600);

//Changes the height of each column according to the number
//of cases within it's position
for (let y = 0; y < numOfCases; y++) {
  cases[y].position = cases[y].position + 100;

  for (let x = 0; x < 200; x++) {
    if (cases[y].position == x) {
      columns[x].style.height = columns[x].clientHeight + 1 + 'px'
    }

  }
}
