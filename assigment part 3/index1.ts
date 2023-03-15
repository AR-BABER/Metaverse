let price:number = 300
let discount: number = (10/100)*100


const myfunction= function  (price:number, discount:number) {
 if (discount>50){
  console.log(" ERROR: This not right discount")
 } else {
  let discountedamount = (price*discount)/100
  let finalprice:number = price-discountedamount
  console.log("as the toatal amount is "+price, " and  the discount is "+discount," percent and the discounted amount is"+discountedamount ," hence your final amount is "+finalprice )
 }
}
myfunction(price,discount)
export{}