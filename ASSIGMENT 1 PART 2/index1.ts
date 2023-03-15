let fruits:string[] = ["apple", "banana", "cherry", "date", "elderberry"]
console.log("   original array  "+fruits)
fruits.push("oranges")
console.log("   added one item at the end   "+fruits)
fruits.unshift("tomato")
console.log("   added one item at the begining  "+fruits)

fruits.splice(2,1,"strawberry")
console.log("   replaced BANANA with strawberry "+fruits)

export{}