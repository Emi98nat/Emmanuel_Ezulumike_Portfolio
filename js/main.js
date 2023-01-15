// Add all your JS here

document.addEventListener('DOMContentLoaded',function(){
// variables
const getNavBtn = document.getElementById('mNav');
const Nav = document.getElementById('Nav');
const closeBtn = document.getElementById('close-btn');
const navList = document.getElementsByClassName('pages');
const qckExpBtn = document.getElementById("qckExpBtn");
const Time = document.getElementById("Time");
const navCon = document.getElementsByClassName('dd-content')[0];
let style = navCon.style.visibility;
    let display=navCon.style.display;
const year = document.getElementById("year");
    
//console.log(Nav.innerHTML);

//function

function navVisible(){
    getNavBtn.style.opacity = 1;
    Nav.style.opacity = 0;
    setTimeout(function(){
        Nav.style.visibility= "visible"
        Nav.style.opacity = 1;
        getNavBtn.style.opacity = 0;
        getNavBtn.style.visibility="hidden"
    },300)
}
function navHidden(){
    Nav.style.opacity= 1;
    getNavBtn.style.opacity = 0;
    setTimeout(function(){
       Nav.style.opacity=0;
       Nav.style.visibility="hidden";
       getNavBtn.style.opacity=1;
       getNavBtn.style.visibility="visible";
    }, 250)
    
}
function hideLinks(){
    //let visible = navCon.getComputedStyle("visibility");
        /*let style = window.getComputedStyle(navCon);
        let visible= style.getPropertyValue('visibility');
        let display=style.getPropertyValue('display');*/
    if (/*visible*/style==="hidden" || display==="none") {
    navCon.style.opacity = 0;
    setTimeout(function(){
        display="inline-block"
        navCon.style.opacity=1;
        style="visible";
        
    }, 250);}else{
        navCon.style.opacity=1;
        setTimeout(function(){
            navCon.style.opacity=0;
            style="hidden";
            display="none";
        },100)
    }
}

//EventListeners
getNavBtn.addEventListener('click', navVisible);
getNavBtn.addEventListener('click',hideLinks)
closeBtn.addEventListener('click', navHidden);
for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', navHidden);
    navList[i].addEventListener('click',hideLinks);
    
}
qckExpBtn.addEventListener('click', hideLinks);
function Greet(){
    let date = new Date();
    let ch = date.getHours();
    if(ch < 12){
        Time.innerHTML= `<span class="LS"> Good Morning!</span> <span class="xs"> 🌄</span>`;
    }
    else if(ch >= 12 && ch <= 16){
        Time.innerHTML =`<span class="LS"> Good Afternoon!</span> <span class="xs">  ☀️</span>`;
    }
    else if(ch >16 && ch <= 20){
        Time.innerHTML = `<span class="LS"> Good Evening!</span> <span class="xs">🌆</span>`;
    }
    else{
        Time.innerHTML = `<span class="LS"> Good Evening!</span> <span class="xs">🌌</span>`;
    }
}
Greet();

const Year = new Date();
Year.setFullYear(2022);
year.innerText = Year.getFullYear();
    
})
