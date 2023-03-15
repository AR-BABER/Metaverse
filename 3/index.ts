let c : string = 'abdul rehman baber'
console.log(c.toUpperCase());
console.log(c.toLowerCase());
function titlecase (a:any){
    return a.toLowerCase().split(' ').map(function (word:string) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    }
   
console.log(titlecase(c))

export{}