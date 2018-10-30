window.onload = function () {
    for (var i = 1; i < 8; i++) {
        document.querySelector("#content" + i).style.display = "none";
    }
}

function showcontent(num) {
    for (var i = 1; i < 8; i++) {
        if (i == num) {
            continue;
        }
        document.querySelector("#content" + i).style.display = "none";
    }
    document.querySelector("#content" + num).style.display = "block";
}

// function input_mail(){
//     document.getElementById("mail").ap = ;
// }

function myprint() {
    var name = document.getElementById("lname").value + " " + document.getElementById("mname").value + " " +document.getElementById("fname").value;
    var adrs = document.getElementById("address").value;
    var call_no = document.getElementById("call").value;
    var career = document.getElementById("career").value;
    var mail = document.getElementById("mail_id").value;
    var edu = document.getElementById("Edu").getElementsByTagName("li");
    edu[0].cloneNode(true);
    document.getElementById("career_ul").appendChild(edu[0]);
    var skill = document.getElementById("content5").innerHTML;
    document.getElementById("out_skill").innerHTML = skill;
    Print_name(name);
    Print_call_no(call_no);
    Print_adrs(adrs);
    Print_mail(mail);
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

function Print_mail(mail){
    document.getElementById('out_mail').innerHTML = mail;
}

var loadImg = function(event){
    var output = document.getElementById('out_image');
    output.src = URL.createObjectURL(event.target.files[0]);
}