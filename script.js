let EntryDiv;
let Regular;
let Simple;
let Donut;
let Projects;
let AboutMe;
let ContactInfo;
let Experience;

window.onload = () => {

	EntryDiv = document.getElementById("entry-div");
	Regular = document.getElementById("div-reg");
	Simple = document.getElementById("div-simp");
	Donut = document.getElementById("donut");
	Projects = document.getElementById("projects");
	AboutMe = document.getElementById("about-me");
	ContactInfo = document.getElementById("contact-info");
	Experience = document.getElementById("experience");

	Regular.addEventListener("click", function() {
		console.log("Regular clicked");
		removeOptions();
		processRegular();
	});

	Simple.addEventListener("click", function() {
		console.log("Simple clicked");
		removeOptions();
		processSimple();
	});
	regDesc = "Ascii Donut\nCool Colors";
	simpDesc = "No Distractions\nNo Colors";
	Regular.style.whiteSpace = "pre-line";
	Simple.style.whiteSpace = "pre-line";
	// Listener for 'hovering' over the div blocks
	Regular.addEventListener("mouseenter", function() {
		document.getElementById("reg-desc").textContent = regDesc;
	});

	// Listener for 'hovering' over the div blocks
	Simple.addEventListener("mouseenter", function() {
		document.getElementById("simp-desc").textContent = simpDesc;
	});

	Regular.addEventListener("mouseout", function() {
		document.getElementById("reg-desc").textContent = "";
	});

	// Listener for 'hovering' over the div blocks
	Simple.addEventListener("mouseout", function() {
		document.getElementById("simp-desc").textContent = "";
	});

}


function enableColorsHeaders() {
	Projects.classList.add('animate-text');
	AboutMe.classList.add('animate-text');
	ContactInfo.classList.add('animate-text');
	Experience.classList.add('animate-text');
}

function processSimple() {

	view_flags.show_donut = false;	
	console.log(view_flags);
}

function processRegular() {
	donutCode();	
	setInterval(enableColorsHeaders, 1000);
}

// Logic which controls the animation of the element being removed
function deleteElement(elem) {
	if (elem) {
		elem.style.opacity = '0';
		elem.style.transition = 'opacity 0.5s';

		setTimeout(() => {
			elem.remove();
			console.log("Element removed");
		}, 500);
	}
	console.log("Custom delete function");
}
function removeOptions() {
	console.log("Removing options!");
	deleteElement(EntryDiv);
}

function donutCode() {
	// ALL CREDIT FOR THIS CODE TO: https://github.com/EvanZhouDev/donut-js/blob/main/donut.min.js
	// This code has been slightly modified for my purposes
				let A=0,B=0,M=
			Math;const a=()=>{let s
		  =[],t=[];A+=.05,B+=.07;const
		o=M.cos(A),e=M.sin(A),n=M.cos(B
	   ),c=M.sin(B);for (let o=0;o<1760;
	 o++)s[o]=o%80==79?"\n":" ",t[o]=0;for
	(let i=0;i<6.28;i+=.07){const r=M.cos(
	i),a=M.sin(i);for(let i=0;i<6.28;i+=.02
	){const l=M.sin        (i),f=M.cos(i),A
	=r+2,B=1/(l*A*          e+a*o+5),d=l*A*
	o-a*e,m=40+30*          B*(f*A*n-d*c)|0
	,v=12+15*B*(f*A        *c+d*n)|0,I=m+80
	*v,h=8*((a*e-l*r*o)*n-l*r*e-a*o-f*r*c)|
	 0;v<22&&v>=0&&m>=0&&m<79&&B>t[I]&&(t[
	 I]=B,s[I]=".,-~:;=!*#$@"[h>0?h:0])}}
	  Donut.innerHTML= 
	  s.join("")},i=setInterval(a,50
		  );/*=!!!**********!!!==:*/
			/*~~;EvanZhouDev;;:~*/
				/*.,-2023--,.*/
}
