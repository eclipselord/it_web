window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY);
});


// *********************************************************


var colors = [ "tomato","brown", "chartreuse", "cyan"]
var index = 0;

function changecolor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var color = colors [randomIndex];
    document.getElementById("circle") .style.color = color;
}

setInterval(function(){
    changecolor();
},2000);

// chang the color///////////////////////////////////////////////////////////////


let progressBer = document.querySelector(".circular-progress");

let valueContainer = document.querySelector(".value-container");



let progressValue = 0;

let progressEndValue = 65;

let Speed = 700;


let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBer.style.background = `conic-gradient(
        #ff3c00 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
        )`;

        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
} ,Speed);











// progress circle


let progressBerr = document.querySelector(".circular-progresss");

let valueContainerr = document.querySelector(".value-containerr");



let progressValuee = 0;

let progressEndValuee = 90;

let Speedd = 700;


let progresss = setInterval(() => {
    progressValuee++;
    valueContainerr.textContent = `${progressValuee}%`;
    progressBerr.style.background = `conic-gradient(
        #ff3c00 ${progressValuee * 3.6}deg,
        #cadcff ${progressValuee * 3.6}deg
        )`;

        if(progressValuee == progressEndValuee) {
            clearInterval(progresss);
        }
} ,Speedd);









// couner section**********************************************************






var wait = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
    for (let i = 0; i < wait.length; i++) {
        inc.push(1);
        if (inc[i] != wait[i].getAttribute("max-data")) {
            inc[i]++
        }
        wait[i].innerHTML = inc[i];
    }
}
setInterval(intervalFunc, 1000)
intervalFunc();



var numberr = document.getElementById("numberr");
window.onscroll = function (){
    var timer = setInterval(() => {

        var topElem = numberr.offsetTop;
        var btmElem = numberr.offsetTop + numberr.clientHeight;
        var topScreen = window.PageTransitionEvent;
        var btmScreen = window.PageTransitionEvent+ window.innerHeight;
        if (btmScreen > topElem && topScreen < btmElem) {
            intervalFunc();
        } else {

            clearInterval(timer);
            for (let i = 0; i < wait.length; i++) {
                wait[i].innerHTML = 1;
                inc = [];
            }
        }

    }, 50);

}


// ********************************************


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// scroll to top

let calcScrollValue = () => {
    let scrollProgress = document.getElementById
        ("progress");
    let progressValue = document.getElementById
        ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 200) / calcHeight)
        ;

    if (pos > 200) {
        scrollProgress.style.display = "grid";

    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

};



window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// FOR CHATBOX/////////////////////////////////////////////////



    document.getElementById('whats-chat').addEventListener("mouseover", showchatbox);
    document.getElementById('chat-top-right').addEventListener("click", closechatbox);
    document.getElementById('send-btn').addEventListener("click", sendmsg);
    window.addEventListener("load", showchatboxtime);
    function showchatbox(){
    document.getElementById('chat-box').style.right='8%'
    }
    function closechatbox(){
    document.getElementById('chat-box').style.right='-500px'


    }
    function showchatboxtime(){
    setTimeout(launchbox,100)
    }
    function launchbox(){
    document.getElementById('chat-box').style.right='8%'

    }
    function sendmsg(){
    var msg = document.getElementById('whats-in').value;
    var relmsg = msg.replace(/ /g,"%20");
    window.open('https://api.whatsapp.com/send?phone=99999999999&text='+relmsg,'_blank');
    
  let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 200) / calcHeight)
        ;


    }

  

// FOR CHATBOX/////////////////////////////////////////////////














