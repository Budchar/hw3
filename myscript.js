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

function myprint() {
    var name = document.getElementById("lname").value + " " + document.getElementById("mname").value + " " +document.getElementById("fname").value;
    var adrs = document.getElementById("address").value;
    var call_no = document.getElementById("call").value;
    var obj = document.getElementById("career").value;
    var mail = document.getElementById("mail_id").value;
    var edu = document.getElementById("Edu").getElementsByTagName("li");
    edu[0].cloneNode(true);
    document.getElementById("edu_ul").appendChild(edu[0]);
    var skill = document.getElementById("Skill_table").innerHTML;
    document.getElementById("out_skill_table").innerHTML = skill;
    Print_name(name);
    Print_call_no(call_no);
    Print_objective(obj);
    Print_adrs(adrs);
    Print_mail(mail);
}

function Print_name(name) {
    document.getElementById("out_name").innerHTML = name;
}

function Print_call_no(call_no) {
    document.getElementById("out_call").innerHTML = call_no;
}

function Print_objective(obj){
    document.getElementById("out_career").innerText = obj;
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

var Add_li_edu = function(){
    var li = document.createElement('li');
    li.innerHTML = '<input type="text">';
    document.getElementById('Edu').appendChild(li);
}

var Add_li_exp = function(){
    var li = document.createElement('li');
    li.innerHTML = '<input type="text">';
    document.getElementById('exp').appendChild(li);
}

var Add_tr = function(){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td1.innerHTML = '<input type="text">'
    td2.innerHTML = '<input type="text">'
    td3.innerHTML = '<input type="text">'
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById('Skill_table_body').appendChild(tr);
}