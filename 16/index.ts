
let invitation: string[]=["adeel","nazir","hafsa"];
for(let value of invitation) {
console.log(value+" please join me for the dinner") 
}
console.log('Opps hafsa cant come so i guess i can invite someone else')
invitation[2]='gohar'
for(let value of invitation) {
    console.log(value+" please join me for this dinner") 
    }
    console.log("i have place for more guess")
    invitation.unshift('zubair')
    invitation.splice(2,0,'bilal','Maria')
    for(let value of invitation) {
        console.log(value+" please join me for this dinner") 
        }

export{}