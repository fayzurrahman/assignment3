//kilometerToMeter converter
function kilometerToMeter(killometer) {
    var meter = killometer*1000;
    return meter;
}
var convert = kilometerToMeter(1);
console.log(convert);


//budgetCalculator

function budgetCalculator(watchNum,mobileNum,laptopNum){
    var result = (watchNum*50)+(mobileNum*100)+(laptopNum*500);
    return result;
}
var total = budgetCalculator(2,2,2);
console.log(total)





