/*=====================================================
        ORO Y VERDE
        HERO ANIMATIONS
======================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*====================================
      CURSOR DORADO
====================================*/

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


/*====================================
      EFECTO PARALLAX HERO
====================================*/

const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/30;

const y=(window.innerHeight/2-e.pageY)/30;

document.querySelector(".clover").style.transform=

`translate(${x}px,${y}px) rotate(${x/4}deg)`;

document.querySelector(".goldDisc").style.transform=

`translate(${x/4}px,${y/4}px)`;

document.querySelector(".goldDisc2").style.transform=

`translate(${x/2}px,${y/2}px)`;

document.querySelector(".goldGlow").style.transform=

`translate(${x/5}px,${y/5}px)`;

document.querySelector(".circleOne").style.transform=

`translate(${x/3}px,${y/3}px)`;

document.querySelector(".circleTwo").style.transform=

`translate(${-x/3}px,${-y/3}px)`;

});

/*====================================
      PARTICULAS DORADAS
====================================*/

const particles=document.querySelector(".goldParticles");

function createParticle(){

const p=document.createElement("span");

const size=Math.random()*8+4;

p.style.width=size+"px";

p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=
(Math.random()*8+6)+"s";

particles.appendChild(p);

setTimeout(()=>{

p.remove();

},14000);

}

setInterval(createParticle,180);


/*====================================
      BOTONES
====================================*/

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});


/*====================================
      NAVBAR
====================================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.classList.add("navScroll");

}else{

nav.classList.remove("navScroll");

}

});

/*====================================
      BOTONES MAGNÉTICOS
====================================*/

document.querySelectorAll(".btnGold,.btnTransparent").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/8;

const moveY=(y-rect.height/2)/8;

btn.style.transform=`translate(${moveX}px,${moveY}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

/*=====================================

      SPOTLIGHT

=====================================*/

const light=document.querySelector(".mouseLight");

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";

});

/*=====================================

        TYPING

=====================================*/

const texto="TU VOTO";

let i=0;

function escribir(){

if(i<texto.length){

document.getElementById("typingTitle").innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,180);

}

}

setTimeout(escribir,1000);




