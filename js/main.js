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

var plant = new Plant('rose', 'common rose', 'common', '2 weeks', 'secondClass', '8 sm');

console.log(plant.getNameDescription());
console.log(plant.getNameSize());



function Tree(name, description, view, year, nameClass, size, classDangerous, place){
  Plant.call(this, name, description, view, year, nameClass, size);
  this.classDangerous = classDangerous;
  this.place = place;
}

Tree.prototype = Object.create(Plant.prototype);

Tree.prototype.getClassDangerous = function(){
  return this.classDangerous;
}

var tree = new Tree('Birch', 'common birch', 'common', '8 years', 'firstClass', '5 sm', 'Europe');


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

var bush = new Bush('Buckthorn', 'buckthorn alder', 'alder', '4 years', 'secondClass', '18 sm', 'Europe');

console.log(bush.getNameApplicationArea());
console.log(bush.getNameDescription());