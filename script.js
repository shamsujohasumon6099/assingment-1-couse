function getOutput(id) {
    return Number(document.getElementById(id).value);
}
function printOutputValue(id, num) {
    document.getElementById(id).value = num;
}
function printOutput(id, num) {
    document.getElementById(id).innerText = num;
}


function bookingCalclution(bookingClass, deraction) {
    var clickCount = getOutput(bookingClass + '-class');
    if (deraction == 'plus') {
        clickCount += 1;

    }
    if (deraction == 'minus' && clickCount > 0) {
        clickCount -= 1;

    }
    printOutputValue(bookingClass + '-class', clickCount);
    var subtotal = 0;
    if (bookingClass == 'first') {
        var economy = getOutput('economy-class');
        subtotal = (clickCount * 150) + (economy * 100);

    }
    if (bookingClass == 'economy') {
        var first = getOutput('first-class');
        subtotal = (clickCount * 100) + (first * 150);

    }
    printOutput('sub-total', subtotal);
    var tax = subtotal * .1;
    printOutput('tax', tax);
    var total = subtotal + tax;
    printOutput('total', total);


}

// var firstPlus = document.getElementById('first-plus');
// firstPlus.addEventListener('click', function () {
//     console.log(firstPlus);
//     var firstPlusNumber = getOutput('first-class');
//     firstPlusNumber += 1;
//     printOutputValue('first-class', firstPlusNumber);
//     var subtotal = 150 * firstPlusNumber;
//     printOutput('sub-total', subtotal);
//     var tax = subtotal * .1;
//     printOutput('tax', tax);
//     var total = subtotal + tax;
//     printOutput('total', total);

// })

// var economyPlus = document.getElementById('economy-plus');
// economyPlus.addEventListener('click', function () {
//     var economyPlusNumber = getOutput('economy');
//     economyPlusNumber += 1;
//     printOutputValue('economy', economyPlusNumber);
//     var subtotal = 100 * economyPlusNumber;
//     printOutput('sub-total', subtotal);
//     var tax = subtotal * .1;
//     printOutput('tax', tax);
//     var total = subtotal + tax;
//     printOutput('total', total);

// })

// var firstMinus = document.getElementById('first-minus');
// firstMinus.addEventListener('click', function () {
//     var firstPlusNumber = getOutput('first-class');
//     firstPlusNumber -= 1;
//     printOutputValue('first-class', firstPlusNumber);
//     var subtotal = 150 * firstPlusNumber;
//     printOutput('sub-total', subtotal);
//     var tax = subtotal * .1;
//     printOutput('tax', tax);
//     var total = subtotal + tax;
//     printOutput('total', total);

// })

// var economyMinus = document.getElementById('economy-minus');
// economyMinus.addEventListener('click', function () {
//     var economyPlusNumber = getOutput('economy');
//     economyPlusNumber -= 1;
//     printOutputValue('economy', economyPlusNumber);
//     var subtotal = 100 * economyPlusNumber;
//     printOutput('sub-total', subtotal);
//     var tax = subtotal * .1;
//     printOutput('tax', tax);
//     var total = subtotal + tax;
//     printOutput('total', total);

// })