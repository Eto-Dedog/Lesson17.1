function Plant(name, description, view, year, nameClass, size){
  this.name = name; 
  this.description = description;
  this.view = view;
  this.year = year;
  this.nameClass = nameClass;
  this.size = size;
}
Plant.prototype.getNameDescription = function(){
  return this.description;
}
Plant.prototype.getNameSize = function(){
  return this.name + ' размер соцветия равен: ' + this.size;
}
var plant = new Plant('rose', 'common rose', 'common', '2 weeks', 'secondClass', '7 sm', 'Europe');
console.log(plant.getNameDescription());
console.log(plant.getNameSize());
function Tree(name, description, view, year, nameClass, size, classDangerous, place, applicationArea){
  Plant.call(this, name, description, view, year, nameClass, size, applicationArea);
  this.classDangerous = classDangerous;
  this.place = place;
}
Tree.prototype = Object.create(Plant.prototype);
Tree.prototype.getClassDangerous = function(){
  return this.classDangerous;
}
var tree = new Tree('Birch', 'common birch', 'common', '10 years', 'firstClass', '4 sm', 'Europe');
console.log(tree.getClassDangerous());
console.log(tree.getNameSize());
function Bush(name, description, view, year, nameClass, size, applicationArea){
  Plant.call(this, name, description, view, year, nameClass, size);
  this.applicationArea = applicationArea;
}
Bush.prototype = Object.create(Plant.prototype);
Bush.prototype.getNameApplicationArea = function(){
  return this.name + ' ' + this.applicationArea;
}
var bush = new Bush('Buckthorn', 'buckthorn alder', 'alder', '2 years', 'secondClass', '15 sm', 'Europe');
console.log(bush.getNameApplicationArea());
console.log(bush.getNameDescription());
//
console.log('_');
console.log('-');
console.log('‾');
function got() {
  let inputOne = document.getElementById("input-id-1").value;
  let inputTwo = document.getElementById("input-id-2").value;
  let inputThree = document.getElementById("input-id-3").value;
  let inputFour = document.getElementById("input-id-4").value;
  let inputFive = document.getElementById("input-id-5").value;
  let inputSix = document.getElementById("input-id-6").value;
  let inputSeven = document.getElementById("input-id-7").value;
  let inputEight = document.getElementById("input-id-8").value;
  let tdOne = document.getElementById("td-1");
  let tdTwo = document.getElementById("td-2");
  let tdThree = document.getElementById("td-3");
  let tdFour = document.getElementById("td-4");
  let tdFive = document.getElementById("td-5");
  let tdSix = document.getElementById("td-6");
  let tdSeven = document.getElementById("td-7");
  let tdEight = document.getElementById("td-8");
  console.log("↓ name ↓");
  console.log(inputOne);
  console.log("↓ description ↓");
  console.log(inputTwo);
  console.log("↓ view ↓");
  console.log(inputThree);
  console.log("↓ year ↓");
  console.log(inputFour);
  console.log("↓ nameClass ↓");
  console.log(inputFive);
  console.log("↓ size ↓");
  console.log(inputSix);
  console.log("↓ applicationArea ↓");
  console.log(inputSeven);
  console.log("↓ checkbox ↓");
  console.log(inputEight);
  console.log('_');
  console.log('-');
  console.log('‾');
  // alert(inputOne+' '+inputTwo+' '+inputThree+' '+inputFour+' '+inputFive+' '+inputSix+' '+inputEight+' '+inputSeven)

  var i = 0;
  function dump() {
    var table = document.querySelector("table"),
        original = document.getElementById('table-id'),
        clone = original.cloneNode(true);
    clone.id = "duplic" + ++i;
    table.appendChild(clone);
    tdOne.innerText = inputOne
    tdTwo.innerText = inputTwo
    tdThree.innerText = inputThree
    tdFour.innerText = inputFour
    tdFive.innerText = inputFive
    tdSix.innerText = inputSix
    tdSeven.innerText = inputEight
    tdEight.innerText = inputSeven
  }
  dump()
}

function del() {
  let tableRow = document.getElementById('table-tr')
  tableRow.remove()
}