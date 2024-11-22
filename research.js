
const navbar=document.getElementsByClassName("nav1")[0];
const menu=document.getElementsByClassName("menu")[0];

menu.onclick=function(){
	
	if(navbar.style.maxHeight)
		navbar.style.maxHeight=null;
	else
		navbar.style.maxHeight = navbar.scrollHeight + "px";
}

