
let invitation: string[]=["adeel","nazir","hafsa"];
for(let value of invitation) {
console.log(value+" please join me for the dinner") 
}
console.log('Opps hafsa cant come so i guess i can invite someone else')
invitation[2]='gohar'
for(let value of invitation) {
    console.log(value+" please join me for this dinner") 
    }
export{}