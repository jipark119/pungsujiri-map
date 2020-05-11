const data =[
	{
	   "Num": "one",
	   "Int":1,
	   "Trait":["Courage","Success","Purpose"],
	   "Reading":"You have deep thinking, outgoing personality. You are flexible, adaptable, and a good listener. You are helpful to people around you.On a bad day, however, you can be overly emotional and get insecure or fearful.",
	   "Comp":["three","nine","six"],
	   "Col":"#94b3e0"
	},
	{
	  "Num": "two",
	  "Int":2,
	  "Trait":["Love","Relationship","Openness"],
	  "Reading":"You are very honest, stable and reliable. You are hard-working, confident and balanced. On a bad day, however, you can sometimes be too much of an workaholic and take on too much responsibility.",
	  "Comp":["one","four","seven"],
	  "Col":"#f2c399"
	},
	{
	  "Num": "three",
	  "Int":3,
	  "Trait":["Strength","Health","Family"],
	  "Reading":"You are patient and work well under pressure. Your open minded trait will allow you to grow beyond current limitations. On a bad day, however, you can be stubborn and self-absorbed",
	  "Comp":["two","five","eight"],
	  "Col":"#f9e41c"
	},
	{
	  "Num": "four",
	  "Int":4,
	  "Trait":["Prosperity","Fortune","Wealth"],
	  "Reading":"You are very thoughtful, sensitive and gentle. You like harmony and balance. You are a good communicator but you can be very hyperactive and temperamental in difficult situation.",
	  "Comp":["one","six","nine"],
	  "Col":"#a0cd63"
	},
	{
	  "Num": "five",
	  "Int":5,
	  "Trait":["Endurance","Harmony","Well Being"],
	  "Reading":"You are very confident and clear. Your powerful and strong personality help you cope with difficult situations. But beaware, you have a power of creation as well as destruction.",
	  "Comp":["three","seven","eight"],
	  "Col":"#d9712d"
	},
	{
	  "Num": "six",
	  "Int":6,
	  "Trait":["Protection","Help","Abundance"],
	  "Reading":"You are self-disciplined and ambitious. You are analytical, extremely focused and goal-oriented. On a bad day, however, you can easily burn yourself out and experience ambitionless and withdrawn state.",
	  "Comp":["two","four","seven"],
	  "Col":"#a6a6a6"
	},
	{
	  "Num": "seven",
	  "Int":7,
	  "Trait":["Joy","Inspiration","Creativity"],
	  "Reading":"Everyone loves you! You are easy-going, entertaining, and fun-loving seeker. But sometimes, you can be self-absorbed and defensive",
	  "Comp":["one","five","nine"],
	  "Col":"#bd2619"
	},
	{
	  "Num": "eight",
	  "Int":8,
	  "Trait":["Wisdom","Knowledge","Clarity"],
	  "Reading":"You are stable and serious like mountain. You are dependable and fair. You might have hard time opening to others and being true to your emotion.",
	  "Comp":["one","three","six"],
	  "Col":"#ecbdcc"
	},
	{
	  "Num": "nine",
	  "Int":9,
	  "Trait":["Fame","Prosperity","Abundance"],
	  "Reading":"You have personality like fire. You are impulsive and have lots of energy. However, you would eventually burn out unless it is regularly fed with what it needs.",
	  "Comp":["two","four","eight"],
	  "Col":"#7be0da"
	}
  ]

  let kuaNum;
	let reading;
	let trait;
	let comp;
  
function next() {
	let name = document.getElementById("name").value;
	let bday = document.getElementById("bday").value;
	let n=  parseInt(bday)
	let num = n % 9 || 9;
	

	for(let i=0;i<data.length;i++){
		if(num == data[i].Int){
			kuaNum = data[i].Int;
			reading = data[i].Reading;
			trait = data[i].Trait;
			comp = data[i].Comp;
		}
	}

	document.querySelector(".prompt-inner").style.display = "none";
		document.querySelector(".title").style.display = "block";
		document.querySelector(".prompt").style.border= "2px dashed black";

	setTimeout(function(){
	let rOne=document.querySelectorAll(".area."+comp[0]);
	let rTwo=document.querySelectorAll(".area."+comp[1]);
	let rThree=document.querySelectorAll(".area."+comp[2]);

	for (let t = 0; t < rOne.length; t++) {
		rOne[t].style.display = "block";
	}
	for (let s = 0; s < rTwo.length; s++) {
		rTwo[s].style.display = "block";
	}
	for (let u = 0; u < rThree.length; u++) {
		rThree[u].style.display = "block";
	}



	document.querySelector(".prompt").style.display = "none";
	document.querySelector(".svgbox").style.display = "block";
	document.querySelector(".reading").style.display = "block";
	document.querySelector(".legend").style.display = "block";

	document.querySelector(".user-name").innerHTML =name;
	document.querySelector(".k-reading").innerHTML =reading;

	document.querySelector(".c-reading").innerHTML =`<div class=${comp[0]}></div>`+trait[0]+`<br><div class=${comp[1]}></div>`+trait[1]+`<br><div class=${comp[2]}></div> `+trait[2]+"<br>";
	}, 3000);

}

function map() {
	let all=document.querySelectorAll(".area");
	for(let v=0;v<all.length;v++){
		if(all[v].className.baseVal=="area "+comp[0]){
		}else if(all[v].className.baseVal=="area "+comp[1]){
		}else if(all[v].className.baseVal=="area "+comp[2]){
		}else{
		all[v].style.fill = "#f4f2e1"; 
		all[v].style.display = "block";
		}	
	}
}

function mapOut() {
	let all=document.querySelectorAll(".area");
	for(let v=0;v<all.length;v++){
		if(all[v].className.baseVal=="area "+comp[0]){
		}else if(all[v].className.baseVal=="area "+comp[1]){
		}else if(all[v].className.baseVal=="area "+comp[2]){
		}else{
		all[v].style.fill = "#f4f2e1"; 
		all[v].style.display = "none";
		}	
	}
}


