
let places: string[]=[]
let mountains:string[]=[]

while(true){
    let placess:string|null=prompt("write your favourte place")
    if (placess==null){
        break
    }
    else{
        places.push(placess)
    }
}
while(true){
    let mount:string|null=prompt("write your favourte mountain")
    if (mount==null){
        break
    }
    else{
        mountains.push(mount)
    }
}

console.log(places)
console.log(mountains)
export{}