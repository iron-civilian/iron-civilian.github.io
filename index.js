const CVbut=document.getElementById("cv");

CVbut.onclick=function(){
	window.open("mycv.pdf","_blank");
}

const navbar=document.getElementsByClassName("nav1")[0];
const menu=document.getElementsByClassName("menu")[0];

menu.onclick=function(){
	if(navbar.style.maxHeight=="")
	{	navbar.style.maxHeight = 0 + "px";
	}
	else
		navbar.style.maxHeight=null;
		
}

