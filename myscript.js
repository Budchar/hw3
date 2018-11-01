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
    var name = document.getElementById("lname").value + " " + document.getElementById("mname").value + " " + document.getElementById("fname").value;
    var adrs = document.getElementById("address").value;
    var call_no = document.getElementById("call").value;
    var obj = document.getElementById("career").value;
    var mail = document.getElementById("mail_id").value;
    document.getElementById("out_name").innerText = name;
    document.getElementById("out_call").innerText = call_no;
    document.getElementById("out_career").innerText = obj;
    document.getElementById("out_adrs").innerText = adrs;
    document.getElementById('out_mail').innerText = mail;

    var edu = document.getElementById("Edu");
    var edu_input = edu.getElementsByTagName('input');
    for (var i = 0; i < edu_input.length; i++) {
        edu.getElementsByTagName('input')[i].readOnly = true;
    }
    document.getElementById('out_edu_ul').innerHTML = edu.innerHTML;

    var exp = document.getElementById("exp");
    var exp_input = exp.getElementsByTagName('input');
    for (var i = 0; i < exp_input.length; i++) {
        exp.getElementsByTagName('input')[i].readOnly = true;
    }
    document.getElementById('out_exp_ul').innerHTML = exp.innerHTML;

    var skill = document.getElementById("Skill_table");
    var skill_input = skill.getElementsByTagName('input');
    for (var i = 0; i < skill_input.length; i++) {
        skill.getElementsByTagName('input')[i].readOnly = true;
    }
    document.getElementById("out_skill_table").innerHTML = skill.innerHTML;

    var etc = document.getElementById("etc");
    var etc_input = etc.getElementsByTagName('input');
    for (var i = 0; i < etc_input.length; i++) {
        etc.getElementsByTagName('input')[i].readOnly = true;
    }
    document.getElementById('out_etc_ul').innerHTML = etc.innerHTML;
}

var loadImg = function (event) {
    var output = document.getElementById('out_image');
    output.src = URL.createObjectURL(event.target.files[0]);
}

var Add = {
    Add_li_edu: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('Edu').appendChild(li);
    },
    Add_li_exp: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('exp').appendChild(li);
    },
    Add_li_etc: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('etc').appendChild(li);
    },
    Add_tr: function () {
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
    },
}

var Change_font = {
    Title: function () {
        var option_title = document.getElementById('font_title').value;
        change_title = function(font){
            document.querySelector('#output>h3').style.fontFamily = font;
            var h4 = document.querySelectorAll('#output>div>h4');
            for (var i = 0; i < h4.length; i++) {
                h4[i].style.fontFamily = font;
            }
        };

        if (option_title === '1') {change_title("Courier New");}
        else if (option_title === '2') {change_title("Lucida Console");}
        else if (option_title === '3') {change_title("impact");}
        else (change_title("Time New Roman"))
    },

    Content: function () {
        var option_content = document.getElementById('font_content').value;
        change_content = function(font){
            document.querySelector('#out_NC').style.fontFamily = font;
            document.querySelector('#out_career').style.fontFamily = font;
            document.querySelector('#out_edu_ul').style.fontFamily = font;
            document.querySelector('#out_skill_table').style.fontFamily = font;
            document.querySelector('#out_etc_ul').style.fontFamily = font;
        
        };

        if (option_content === '1') {change_content("Times New Roman");}
        else if (option_content === '2') {change_content("arial");}
        else if (option_content === '3') {change_content("Georgia");}
    },
}

var Change_size = {
    Title: function () {
        var option_title = document.getElementById('font_title').value;
        change_title = function(font){
            document.querySelector('#output>h3').style.fontFamily = font;
            var h4 = document.querySelectorAll('#output>div>h4');
            for (var i = 0; i < h4.length; i++) {
                h4[i].style.fontFamily = font;
            }
        };

        if (option_title === '1') {change_title("Courier New");}
        else if (option_title === '2') {change_title("Lucida Console");}
        else if (option_title === '3') {change_title("impact");}
        else (change_title("Time New Roman"))
    },

    Subitle: function () {
        var option_title = document.getElementById('font_title').value;
        change_title = function(font){
            document.querySelector('#output>h3').style.fontFamily = font;
            var h4 = document.querySelectorAll('#output>div>h4');
            for (var i = 0; i < h4.length; i++) {
                h4[i].style.fontFamily = font;
            }
        };

        if (option_title === '1') {change_title("Courier New");}
        else if (option_title === '2') {change_title("Lucida Console");}
        else if (option_title === '3') {change_title("impact");}
        else (change_title("Time New Roman"))
    },

    Content: function () {
        var option_content = document.getElementById('font_content').value;
        change_content = function(font){
            document.querySelector('#out_NC').style.fontFamily = font;
            document.querySelector('#out_career').style.fontFamily = font;
            document.querySelector('#out_edu_ul').style.fontFamily = font;
            document.querySelector('#out_skill_table').style.fontFamily = font;
            document.querySelector('#out_etc_ul').style.fontFamily = font;
        
        };

        if (option_content === '1') {change_content("Times New Roman");}
        else if (option_content === '2') {change_content("arial");}
        else if (option_content === '3') {change_content("Georgia");}
    },
}