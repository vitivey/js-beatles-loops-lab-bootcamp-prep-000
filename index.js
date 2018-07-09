// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var array = [];
  for (var index=0; index<arrayMusicians.length; index++){
    array=[...array, `${arrayMusicians[index]} plays ${arrayInstruments[index]}`]
  }
   return array;
  }
  
function johnLennonFacts(arrayFacts){
    let indexLennon=arrayFacts.length;
      while (indexLennon>-1) {
        arrayFacts[indexLennon] = arrayFacts[indexLennon]+"!!!";
        --indexLennon
      }
    return arrayFacts;
    }