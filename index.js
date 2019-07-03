const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function reduceBatteries(batteryBatches){
    return batteryBatches.reduce((a, c) => a + c)
}

const totalBatteries = reduceBatteries(batteryBatches)