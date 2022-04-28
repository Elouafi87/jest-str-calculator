export class StringCalculator {
     add(str){
         
        var re = /[\n/;,]/;
        var liste = str.split(re);
        console.log(liste)
         if (str == "") return 0 ;
         if (liste.length >= 1) {
            let  result = 0 ;
            for (let i = 0; i < liste.length; i++) {
                let x1 = parseInt(liste[i])
                if (x1 >=0 ){
                        result += x1  
                 }               
              }
            return result
         }
        } 
};


 /* let x = new StringCalculator
console.log(x.add("9\n1;5/2")) */

