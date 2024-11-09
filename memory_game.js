let cards=document.getElementsByClassName("card");
let colors=["rgb(255, 102, 69)","rgb(255, 195, 69)","rgb(69, 255, 195)","rgb(69, 255, 102)","rgb(255, 102, 69)","rgb(255, 195, 69)","rgb(69, 255, 195)","rgb(69, 255, 102)","rgb(255, 102, 69)","rgb(255, 195, 69)","rgb(69, 255, 195)","rgb(69, 255, 102)","rgb(255, 102, 69)","rgb(255, 195, 69)","rgb(69, 255, 195)","rgb(69, 255, 102)"];

const card_cnt=document.getElementsByClassName("card_container")[0];
const reset=document.getElementById("reset");
const score=document.getElementById("score");

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) { 
  
       var j = Math.floor(Math.random() * (i + 1));
                  
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
      
   return array;
}

/*colors=shuffleArray(colors);*/
cards=Array.from(cards);

let open=0;
let openList=[];
let counter=0;
let counterEnd=0;
let flag=false;

function setColor(i)
{
	return ()=>{
	
	if(open==2)
	{
		
		if(colors[openList[0]]==colors[openList[1]])
		{
			flag=false;
			cards[openList[0]].onclick = ()=>{};
			cards[openList[1]].onclick = ()=>{};
			open=0;
			if(openList[0]==i || openList[1]==i)
				flag=true;
			openList.pop();
			openList.pop();
			counterEnd+=1;
			
			if(flag)
			return;
		}
		else if(openList[1]==i)
		{
			cards[i].style.backgroundColor="var(--color1)";
			openList.pop();
			open-=1;
			counter+=1;
			return;
		}
		else if(openList[0]==i)
		{
			cards[i].style.backgroundColor="var(--color1)";
			openList[0]=openList[1];
			openList.pop();
			open-=1;
			counter+=1;
			return;
		}
		else
		{
			cards[openList[0]].style.backgroundColor="var(--color1)";
			cards[openList[1]].style.backgroundColor="var(--color1)";
			open=0;
			openList.pop();
			openList.pop();
		}
	
	}
	
	if(counterEnd==8)
	return;
	
	if(open<=1)
	{
		counter+=1;
		if(getComputedStyle(cards[i]).backgroundColor==colors[i])
		{
		cards[i].style.backgroundColor="var(--color1)";
		open-=1;
		openList.pop();
		}
		else
		{
		cards[i].style.backgroundColor=colors[i];
		open+=1;
		openList.push(i);
		}
	}
	
	
	
	};
}

reset.onclick=function(){
	colors=shuffleArray(colors);
	open=0;
	openList=[];
	counter=0;
	counterEnd=0;
	score.textContent=`Click Count: ${counter}`;
	for(let i=0;i<16;i++)
	{
	cards[i].style.backgroundColor="var(--color1)";
	cards[i].onclick = setColor(i);
	}
}


card_cnt.onclick=function(){
	score.textContent=`Click Count: ${counter}`;	
}


window.addEventListener("load",(e)=>{reset.click();});


/*

for(let i=0;i<16;i++)
{
	cards[i].onclick = setColor(i);
}
*/




