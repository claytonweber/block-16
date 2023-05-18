// budget = 50;

// function sumOfGifts(price1, price2) {
//     let giftTotal = price1 + price2;
//     console.log(giftTotal);
//     return giftTotal;
// }

// let total = sumOfGifts(50, 20);

// function addTax(giftTotal) {
//     let giftsWithTax = giftTotal + (giftTotal * .08);
//     console.log(giftsWithTax);
//     return giftsWithTax;
// }

// let totalWithTax = addTax(total);

// function holidayBudget(budget, totalWithTax) {
//     return budget >= totalWithTax;
// }

// holidayBudget(budget, totalWithTax)

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


function totalCost(prescriptionObject) {
    let sum = prescriptionObject.pricePerRefill * prescriptionObject.refills;
    if(prescriptionObject.subscription && prescriptionObject.coupon) {
        sum = (sum - (sum * .25) - 10);
        return sum;
    } else if(prescriptionObject.subscription) {
        sum = sum - (sum * .25);
        console.log(sum);
        return sum;
    } else if(prescriptionObject.coupon) {
        sum = sum - 10;
        return sum;
    } else {
        return sum;
    }    
}

console.log(totalCost(timmy));
console.log(totalCost(sarah));
console.log(totalCost(rocky));