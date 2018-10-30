window.onload = function () {
    for (var i = 1; i < 8; i++) {
        document.getElementById("content" + i).style.display = "none";
    }
}

function showcontent(num) {
    for (var i = 1; i < 8; i++) {
        if (i == num) {
            continue;
        }
        document.getElementById("content" + i).style.display = "none";
    }
    document.getElementById("content" + num).style.display = "block";
}

// function input_mail(){
//     document.getElementById("mail").ap = ;
// }

function myprint() {
    var name = document.getElementById("lname").value + " " + document.getElementById("mname").value + " " +document.getElementById("fname").value;
    var adrs = document.getElementById("address").value;
    var call_no = document.getElementById("call").value;
    var career = document.getElementById("career").value;
    Print_name(name);
    Print_call_no(call_no);
    Print_adrs(adrs);
}

function Print_name(name) {
    document.getElementById("out_name").innerHTML = name;
}

function Print_call_no(call_no) {
    document.getElementById("out_call").innerHTML = call_no;
}

function Print_adrs(adrs) {
    document.getElementById("out_adrs").innerHTML = adrs;
}