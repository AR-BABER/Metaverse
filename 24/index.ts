let car:any = 'subaru';
let otherCar:string[] =['mehran','civic','chenggan']
if(car === otherCar){
  console.log("true")
}
else{
  console.log("false")
}
if(car.length === otherCar.length){
  console.log("true")
}
else{
  console.log("false")
}

if(car === car.toLowerCase()){
  console.log("true")
}
else{
  console.log("false")
}

let num = 5;
if(num === 5){
  console.log("true")
}
else{
  console.log("false")
}

if(num <= 5){
  console.log("true")
}
else{
  console.log("false")
}

if(num === 5 || "subaru"){
  console.log("true")
}
else{
  console.log("false")
}

if(car === 5 || "subaru"){
  console.log("true")
}
else{
  console.log("false")
}

if(car === 5 || "mehran"){
  console.log("true")
}
else{
  console.log("false")
}

if(otherCar.includes("mehran")){
  console.log("true")
}
else{
  console.log("false")
}

if(otherCar.includes("bike")){
  console.log("true")
}
else{
  console.log("not in the array, false")
}





export{}
