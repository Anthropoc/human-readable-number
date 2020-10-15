module.exports = function toReadable (number) {
  let num = String(number);
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenTwent = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred' ];
  let result = "";
   if ( num.length == 1){
         result = `${result}${units[num[0]]}`; 
                
    } else if ( num.length == 2){
         if ( num[0] == 1){  
             result = `${result}${tenTwent[num[1]]}`;             
        } else if ( num[0] > 1 && num[1]>0){
             result = `${result}${tens[num[0]-2]} ${units[num[1]]}`;              
        } else if ( num[0]> 1 && num[1] == 0){
             result = `${result}${tens[num[0]-2]}`;      
        }                            
    } else if ( num.length == 3 ){
        if ( num[1] == 1) {
             result = `${result}${hundreds[num[0]-1]} ${tenTwent[num[2]]}`;           
        } else if(num[1] == 0 && num[2] == 0){
            result = `${result}${hundreds[num[0]-1]}`;  
        }else if( num[1] == 0){
            result = `${result}${hundreds[num[0]-1]} ${units[num[2]]}`;
        }else if ( num[1] > 1 && num[2]>0){
             result = `${result}${hundreds[num[0]-1]} ${tens[num[1]-2]} ${units[num[2]]}`;            
        } else if(num[1]> 1 && num[2] == 0){
             result = `${result}${hundreds[num[0]-1]} ${tens[num[1]-2]}`;            
        } 
    } 
    return result; 
}
      

      