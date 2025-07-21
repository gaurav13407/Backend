// 1 Problem
let teaFlavors=["Gree tea","Bllack tea","oolong tes"];

let teaf1=new Array("Gree tea","Bllack tea","oolong tes");

let firstTea=teaFlavors[0];

//Problem 2

let cities=["london","tokyo","Paris","New York"];
let favoratecitiy=cities[2]

//Problem 3
let teaTypes=["herbal tea","white tea","masala chai"];

//Problem 4
let citiesVistied=["Mumbai","Sydeny"]
// citiesVistied[citiesVistied.length]="Berlin";
citiesVistied.push("Berline")
console.log(citiesVistied);

//Problem 5
let teaOrder=["chai","ice tea","matcha","earlgrey"];
let last=teaOrder.pop();
console.log(teaOrder);
console.log(last);

//Problem 6
let popularTeas=["green tea","oolong tea","chai"];
let softCopyteas=popularTeas;
popularTeas.pop();
console.log(softCopyteas);
console.log(softCopyteas);

//Problem 7

let topCities=["Berline","singapore","New York"]
let hardCopyCities=[...topCities];
// let hardCopyCities=topCities.slice();

topCities.pop()
console.log(hardCopyCities);
console.log(topCities);


//Problem 8
let europenCities=["Paris","Rome"];
let asainCities=["Tokyo","Bamgkok"];
// let worldCities=europenCities+asainCities;
// let worldCities=[europenCities,asainCities]
let worldCities=europenCities.concat(asainCities);
console.log(worldCities);

//let 9
let teaMenu=["Masala chai","oolong tea","green tea","early tea"];
let menuLength=teaMenu.length;

//Problem 10
let cityBucketlist=["Kyoto","London","Cape Town","Vancouver"];

let isLondon=cityBucketlist.includes("London");
console.log(isLondon);
