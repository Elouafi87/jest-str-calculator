export class StringCalculator {
     add(){
         if (arguments.length > 2){
             console.log("merci de saisir un nombre de params <3")
         }
        if (arguments.length == 1 ){
            if (arguments[0] =="") return 0;
            if (arguments[0]  =="1") return 1;
        }
        if (arguments.length < 3 && arguments.length > 1){
           let  result = 0 ;
            for (let i = 0; i < arguments.length; i++) {
                let x1 = parseInt(arguments[i])
                result += x1                 
            }
            return result
        } 
    }
};






/*result = "+"
         if (arguments.length > 2){
             console.log("merci de saisir un nombre de params <3")
         }
        if (arguments.length == 1 ){
            if (arguments[0] =="") return 0;
            if (arguments[0]  =="1") return 1;
        }
        if (arguments.length > 2){
            for (i = 1; i < arguments.length; i++) {
                retrun 
            }
        } */