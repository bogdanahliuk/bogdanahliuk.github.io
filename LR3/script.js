let tab;
let tabContent;
let rtl = document.getElementById('rtl');
let rtr = document.getElementById('rtr');
let rbr = document.getElementById('rbr');
let rbl = document.getElementById('rbl');
let ttr = document.getElementById('ttr');
let ttl = document.getElementById('ttl');
let tbr = document.getElementById('tbr');
let tbl = document.getElementById('tbl');
let block = document.getElementById('block');
let code = document.getElementById('code');
let rRed = document.getElementById('rRed');
let rGreen = document.getElementById('rGreen');
let rBlue = document.getElementById('rBlue');
let rOpacity = document.getElementById('rOpacity');
let tRed = document.getElementById('tRed');
let tGreen = document.getElementById('tGreen');
let tBlue = document.getElementById('tBlue');
let tOpacity = document.getElementById('tOpacity');
let txtColor = document.getElementById('txtColor');
let block1 = document.getElementById('block1');
let code1 = document.getElementById('code1');
let cursorType = document.getElementById('cursorType');
let block2 = document.getElementById('block2');
let code2 = document.getElementById('code2');

window.onload=function(){
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a){
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(a){
    if(tabContent[a].classList.contains('hide')){
        hideTabsContent(0);
        tabContent[a].classList.add('show')
        tab[a].classList.add('whiteborder');
        tabContent[a].classList.remove('hide');
    }
}

document.getElementById("tabs").onclick = function(event){
    let target = event.target;
    if(target.className == 'tab'){
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function generate(){
    ttr.value = rtr.value;
    ttl.value = rtl.value;
    tbr.value = rbr.value;
    tbl.value = rbl.value;
    block.style.borderRadius = rtl.value + "px " + rtr.value + "px " + rbr.value + 
    "px " + rbl.value + "px";
    code.value = "border-radius: " + block.style.borderRadius + ";";
}

function change(){
    rtr.value = ttr.value;
    rtl.value = ttl.value;
    rbr.value = tbr.value;
    rbl.value = tbl.value;
    block.style.borderRadius = rtl.value + "px " + rtr.value + "px " + rbr.value + 
    "px " + rbl.value + "px";
    code.value = "border-radius: " + block.style.borderRadius + ";";
}

function changeColor1(){
    tRed.value = rRed.value;
    tGreen.value = rGreen.value;
    tBlue.value = rBlue.value;
    tOpacity.value = rOpacity.value;
    block1.style.backgroundColor = "rgba(" + rRed.value + "," + rGreen.value + "," + rBlue.value + "," + rOpacity.value/10 + ")";
    block1.style.color = txtColor.value;
    code1.value = "background-color: " + block1.style.backgroundColor + 
    ";\ncolor: " + block1.style.color + ";";
}

function changeColor2(){
    rRed.value = tRed.value;
    rGreen.value = tGreen.value;
    rBlue.value = tBlue.value;
    rOpacity.value = tOpacity.value;
    block1.style.color = txtColor.value;
    block1.style.backgroundColor = "rgba(" + rRed.value + "," + rGreen.value + "," + rBlue.value + "," + rOpacity.value/10 + ")";
    code1.value = "background-color: " + block1.style.backgroundColor +
    ";\ncolor: " + block1.style.color + ";";
}

function changeCursor(){
    block2.style.cursor = cursorType.value;
    code2.value = "cursor: " + block2.style.cursor + ";";
}