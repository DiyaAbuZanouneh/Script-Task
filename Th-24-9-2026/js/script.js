//============ Class Code ======================
//============ Creating Object =================
console.log("Creating Object : ");

const planet = {
  name: "Mars",
  moons: 2,
  hasRings: false,
  color: "Red",
};

console.log(planet);

//============== Reading Object Value ===========

const key = "color";

console.log("Reading Object Value : ");
console.log("Planet Name : " + planet.name);
console.log("Planet Color : " + planet["color"]);
console.log("Planet Color : " + planet[key]); //  using the value of key variable
console.log("Planet Color : " + planet.key); // undefined

//========= Updating , Adding , Deleting Keys ===========
console.log("Updating Planets Moons : ");
planet.moons = 3;
console.log(planet.moons);

console.log("Adding Property : ");
planet.distance = "228 KM";
console.log("New Property : " + planet.distance);

console.log("Delete Property : ");
delete planet.hasRings;
console.log("Object After Delete hasRings : ");
console.log(planet);

// =========== Nested Object ============
console.log("Nested Objects : ");
const mission = {
  name: "perseverance",
  commander: {
    name: "Tala",
    city: "Amman",
  },
  crew: ["Shatha", "Shawabkeh", "Tamara"],
};
console.log(mission);

console.log(mission.name);
console.log(mission.commander.city);
console.log(mission.crew[1]);
console.log("Number of crew member : " + mission.crew.length);

//=========== Methods: functions stored inside objects =====
console.log("Methods : ");
const rover = {
  name: "Explorer 1",
  battery: 80,
  report: function () {
    return this.name + " battery at " + this.battery + "%";
  },
};

// This key word for dry => don't repeat yourself
console.log(rover.report());

// =========== Getting all keys values, or Paris ================
console.log("All keys for rover object : ");
console.log(Object.keys(rover));

console.log("All values for rover object : ");
console.log(Object.values(rover));

console.log("All paris for rover object : ");
console.log(Object.entries(rover));

// ============== Looping ===================

console.log("Looping Over Object : ");
for (const key in rover) {
  console.log(key + " : " + rover[key]);
}

//======================================
/*
document.querySelector()
document.getElementById()
element.addEventListener()
*/
// ========= Array Of Objects ===========

const planets = [
  { name: "Earth", moons: 1, type: "Rocky" },
  { name: "Mars", moons: 2, type: "Rocky" },
  { name: "Jupiter", moons: 95, type: "Gas Giant" },
];

console.log("Loop throw Array of Objects : ");
console.log(planets);
planets.forEach( (key) => {
    console.log(key);
});

