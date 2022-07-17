//for numeric validation
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//variables  
var item1;
var item2;
var item3;
var item4;
var item5;
var customerName;

function btn1() {
    //input box prompt
    item1 = prompt("Add an qantity for this image");

    //Checkout button visible upon validation of numeric value
    if (isNumeric(item1) == true) {
        document.getElementById("item1").innerHTML = "x " + item1;
        showCheckoutBtn();
    } 
    //valid data entry validation
    else {
        do {
            item1 = prompt("Please enter a number only");
            showCheckoutBtn();
        } while (isNaN(item1));
        document.getElementById("item1").innerHTML = "x " + item1;
    }
}

function btn2() {
    //input box prompt
    item2 = prompt("Add an qantity for this image");

    //Checkout button visible upon validation of numeric value
    if (isNumeric(item2) == true) {
        document.getElementById("item2").innerHTML = "x " + item2;
        showCheckoutBtn();
    } 
    //if numeric is not valid input then ask the use to enter valid data 
    else {
        do {
            item5 = prompt("Please enter a number only");
            showCheckoutBtn();
        } while (isNaN(item2));
        document.getElementById("item2").innerHTML = "x " + item2;
    }
}

function btn3() {
    //input box prompt
    item3 = prompt("Add an qantity for this image");

    //Checkout button visible upon validation of numeric value
    if (isNumeric(item3) == true) {
        document.getElementById("item3").innerHTML = "x " + item3;
        showCheckoutBtn();
    } 
    //if numeric is not valid input then ask the use to enter valid data 
    else {
        do {
            item3 = prompt("Please enter a number only");
            showCheckoutBtn();
        } while (isNaN(item3));
        document.getElementById("item3").innerHTML = "x " + item3;
    }
}

function btn4() {
    //input box prompt
    item4 = prompt("Add an qantity for this image");

    //Checkout button visible upon validation of numeric value
    if (isNumeric(item4) == true) {
        document.getElementById("item4").innerHTML = "x " + item4;
        showCheckoutBtn();
    } 
    //if numeric is not valid input then ask the use to enter valid data 
    else {
        do {
            item4 = prompt("Please enter a number only");
            showCheckoutBtn();
        } while (isNaN(item4));
        document.getElementById("item4").innerHTML = "x " + item4;
    }
}

function btn5() {
    //input box
    item5 = prompt("Add an qantity for this image");

    //Checkout button visible upon validation of numeric value
    if (isNumeric(item5) == true) {
        document.getElementById("item1").innerHTML = "x " + item5;
        showCheckoutBtn();
    } 
    //if numeric is not valid input then ask the use to enter valid data 
    else {
        do {
            item5 = prompt("Please enter a number only");
            showCheckoutBtn();
        } while (isNaN(item5));
        document.getElementById("item1").innerHTML = "x " + item5;
    }
}

//checkout function after clicking this button user will the generated receipt
function checkOut() {   
    //display zero if no images selected 
    if (item1 == undefined) {
        item1 = "0";
    }
    if (item2 == undefined) {
        item2 = "0";
    }
    if (item3 == undefined) {
        item3 = "0";
    }
    if (item4 == undefined) {
        item4 = "0";
    }
    if (item5 == undefined) {
        item5 = "0";
    }

//input customer name
customerName = prompt("Enter customer name: ");

//enable visibility of receipt table
document.getElementById("receiptTbl").style.visibility = "visible";
document.getElementById("customerName").innerHTML = "Customer name: " + customerName;

//quanity and price calculation 
document.getElementById("math1").innerHTML = item1;
var img1Total = item1 * 70;

//if item total is null then assigning value of zero so the receipt don't print NaN 
if (isNaN(img1Total)) {
    img1Total = 0;
}
document.getElementById("total1").innerHTML = "$" + img1Total.toFixed(0);

document.getElementById("math2").innerHTML = item2;
var img2Total = item2 * 90;
if (isNaN(img2Total)) {
    img2Total = 0;
}
document.getElementById("total2").innerHTML = "$" + img2Total.toFixed(0);

document.getElementById("math3").innerHTML = item3;
var img3Total = item3 * 100;
if (isNaN(img3Total)) {
    img3Total = 0;
}
document.getElementById("total3").innerHTML = "$" + img3Total.toFixed(0);

document.getElementById("math4").innerHTML = item4;
var img4Total = item4 * 120;
if (isNaN(img4Total)) {
    img4Total = 0;
}
document.getElementById("total4").innerHTML = "$" + img4Total.toFixed(0);

document.getElementById("math5").innerHTML = item5;
var img5Total = item5 * 150;
if (isNaN(img5Total)) {
    img5Total = 0;
}
document.getElementById("total5").innerHTML = "$" + img5Total.toFixed(0);

    //total price before tax
    var totalPrice = img1Total + img2Total + img3Total + img4Total + img5Total;

    //counting tax
    var gst = ((totalPrice * 13) / 100);
    document.getElementById("gst").innerHTML = "$" + gst.toFixed(2);

    //display total price after tax
    document.getElementById("total").innerHTML = "$" + (totalPrice + gst).toFixed(2);

}

//fuction to show the checkout button
function showCheckoutBtn() {
    document.getElementById("btnMain").style.visibility = "visible";
}
