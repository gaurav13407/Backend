// problem 1
// let array=["green tea","black tea","chai","oolong"];
// let target="chai";
// let selctedTeas=[];
// for(let i=0;i<array.length;i++){
//     if(array[i]==target){
//         break;
        
//     }
//     selctedTeas.push(array[i]);
// }
// console.log(selctedTeas);

//problem 2

// let cities=["London","Paris","Berlin"]
// let city=[];
// for(let i=0;i<cities.length;i++){
//     if(cities[i]=="Paris"){
//         continue;
//     }
//     city.push(cities[i]);
// }
// console.log(city);

// //problem 3
// let numbers=[1,2,3,4,5];
// let smallnumber=[];
// for (const element of numbers) {
//     if(element==4){
//         break;
//     }
//     smallnumber.push(element);
// }
// console.log(smallnumber);

//problem 4
// let teas=["chai","green tea","herbal tea","black tea"];
// let validate=[];
// for (const e of teas) {
//     if(e=="herbal tea"){
//         continue;
//     }
//     validate.push(e);
// }
// console.log(validate);

//Problem 5
// let citiesPopulation={London:89000,"New York":84000,Paris:22000,Berlin:35000};
// let cityPopulation={};
// // console.log(Object.keys(citiesPopulation));

//     for(const city in citiesPopulation){
//         // key=value
//         let cityNew[city]=citiesPopulation[city];
//         console.log(cityNew);
        
        
//     }

// //problem 5
// let worldCities={Sydney:5000000,Tokyo:9000000,Berlin:35000000,Paris:22000000};
// let largecities={};

// for (const city in worldCities) {
//     if(worldCities[city]<3000000){
//         continue;
//     }
//     largecities[city]=worldCities[city];
// }
// console.log(largecities);

// problem 6
let teaCollection=["eraly grey","green tea","chai","oolong tea"];
let aviailabeTeas=[];
teaCollection.forEach(function(tea){
    if(tea=="chai"){
        return;
    }
    aviailabeTeas.push(tea);
})
console.log(aviailabeTeas);

