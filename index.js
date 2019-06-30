const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// var totalBatteries = 0;

let totalBatteries = batteryBatches.reduce(function(totalBatteries, power){
  return power + totalBatteries;
}, 0);
