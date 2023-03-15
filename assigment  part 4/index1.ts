let price:number = 6

const factoriell= function  (price:number) 
{
  var fact= price
 for(let i=price-1; i>1; i--){
  
  fact=fact*i

  }
  console.log("factoriel of number " +price, "is "+fact)
}
factoriell(price)

export{}