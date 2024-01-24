//function sayHello(userFirstname, userLastname) {
//return "Hello " + userFirstname + " " + userLastname
//} function getAge() {
//return 28
//}


//การเรียกใช้ Function return และ parameter


//let userFirstInput = prompt(" Input your Firstname")
//let userLastInput = prompt(" Input your Lastname")

//function tocelsius() {
//let fahrenheit = prompt("fahrenheit:")
//let value = (fahrenheit - 32) * 5 / 9
//document.getElementById("result_celsius").innerHTML = value.toFixed(2) + "°C"
//document.getElementById("result_fahrenheit").innerHTML = fahrenheit + "°F"
//}
//function tofahrenheit() {
//let celsius = prompt("celsius:")
//let value = (celsius * 9) / 5 + 32
//document.getElementById("fahrenheit_result").innerHTML = value.toFixed(2) + "°F"
//document.getElementById("celsius_result").innerHTML = celsius + "°C"
//}
function tocelsius01(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C"
}
function display(element, value) {
    document.getElementById(element).innerHTML = value
}
function tofahrenheit01(celsius) {
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + "°F"
}
function display(element, value) {
    document.getElementById(element).innerHTML = value
}
//alert(sayHello(userFirstInput, userLastInput))
//alert(getAge())
//tocelsius()
//tofahrenheit()
alert(tocelsius01(150))
display("tocelsius", tocelsius01(150))
alert(tofahrenheit01(270))
display("tofahrenheit", tofahrenheit01(270))