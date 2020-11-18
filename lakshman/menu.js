let items = new Array();
var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setGlobal(a, b){
	count[a] = b;
};

function add(id){
	if((id[2] == 'o') || (id[3] == 'd')){
		var t = document.getElementById(id).querySelector("button");
		var x = parseInt(id.substr(4,5)) - 1;
		var quant = document.getElementById(id).querySelector("input");
		if(count[x] == 0){                           //About ADD and REMOVE buttons
			t.innerHTML = "REMOVE";
			setGlobal(x, 1);
			quant.value = "1";                  //About Qunatity of the item ordered.
		}
		else{
			t.innerHTML = "ADD";
			setGlobal(x, 0);
			quant.value = "0";
		}
	}
}


function Maketable(aray, n) {
	var line = document.getElementsByClassName('line');
	for (var i = n; i < line.length-1; i++) {
		line[i].style.display = "none";
	}
	for(var i=0,k=1; i < aray.length; i++,k++){
		var img = document.createElement("img");
		img.className = 'full-width';
		img.src = aray[i];
		document.getElementById("td"+k.toString()).appendChild(img);

		var sp1 = document.createElement("span");
		sp1.className = 'thin';
		i++;
		var text = document.createTextNode(aray[i]); 		//sp1.innerHTML = items[0];
		sp1.appendChild(text);
		k++;
		document.getElementById("td"+k.toString()).appendChild(sp1);
		const linebreak = document.createElement("br");
		document.getElementById("td"+k.toString()).appendChild(linebreak);
		var sp2 = document.createElement("span");
		sp2.className = 'thin small';
		i++;
		var text2 = document.createTextNode("Qunatity :"+aray[i]);		//sp2.innerHTML = items[1];
		sp2.appendChild(text2);
		document.getElementById("td"+k.toString()).appendChild(sp2);

		var p = document.createElement("div");
		p.className = 'price';
		i++;
		p.innerHTML = aray[i];
		k++;
		document.getElementById("td"+k.toString()).appendChild(p);
	}
}

function sub(cls1, cls2){
	document.querySelector("link[href='css/chome.css']").href = "css/5.css";
	document.getElementsByClassName('header')[0].style.display = "none";
	var head = document.getElementsByTagName("h2");
	for (var a = 0; a < head.length; a++) {
		head[a].style.display = "none";          //Making food item headings invisible.
	}

	var dsi = document.getElementsByClassName("food");
	for(var a=0; a<dsi.length; a++){
		dsi[a].style.display = "none";    //Making food order box invisible.
	}

	document.getElementsByClassName(cls1)[0].style.display = "none";//Making order button invisible
	document.getElementsByClassName(cls2)[0].style.display = "block";//Making back button visible
	document.getElementsByClassName('container')[0].style.display = "block";

	var no_item = 0;
	for (var i=0; i<count.length; i++) {
		if(count[i] == 1){
			no_item++;
			var t = document.getElementsByClassName("food")[i];
			items.push(t.querySelector("img").src);
			items.push(t.querySelector("legend").innerHTML); //copying selected items details
			items.push(t.querySelector("input").value);    //into the array for the table.
			items.push(t.querySelector("span").innerHTML);
		}
	}

	Maketable(items, no_item);

	var sum = 0;
	for (var i = 2; i < items.length; i+=4) {
		sum += parseInt(items[i+1].substr(1,3))*parseInt(items[i]);
	}
	var tax = 0.2*sum;
	var total_price = document.getElementById("total_price");
	total_price.innerHTML = "<div class='thin dense'>₹"+tax.toString()+"</div> <div class='thin dense'>₹90</div>"+"₹"+(tax+90+sum).toString();
}

function back(cls1, cls2){      //back button taking back to menu selection.
	document.querySelector("link[href='css/5.css']").href = "css/chome.css";
document.getElementsByClassName('header')[0].style.display = "block";
	var head = document.getElementsByTagName("h2");
	for (var a = 0; a < head.length; a++) {
		head[a].style.display = "block";      //Making all food item headings visible
	}

	var dsi = document.getElementsByClassName("food");
	for(var a=0; a<dsi.length; a++){       //Making all food box visible.
		dsi[a].style.display = "inline-block";
	}

	document.getElementsByClassName(cls1)[0].style.display = "block";//Making order button visible
	document.getElementsByClassName(cls2)[0].style.display = "none";//Making back button invisible

	items.length = 0;    //Array items is completely empty.
	var backline = document.getElementsByClassName('line');
	for (var i = 0; i < backline.length-1; i++) {
		backline[i].style.display = "block";
	}

	var td = document.getElementsByClassName('rem');
	for (var i = 0; i < td.length; i++) {
		td[i].innerHTML = "";
	}

	document.getElementsByClassName('container')[0].style.display = "none";
}


var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  	var node;
  	for (var i = 0; i < this.childNodes.length-1; i++)
    	node = this.childNodes[i];
    	if (node.className === 'dropdown-select') {
      		node.classList.add('visible');
       		activeDropdown = node;
    	};
})

window.onclick = function(e) {
  	console.log(e.target.tagName)
  	console.log('dropdown');
  	console.log(activeDropdown)
  	if (e.target.tagName === 'LI' && activeDropdown){
    	if (e.target.innerHTML === 'Master Card') {
      		document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          	activeDropdown.classList.remove('visible');
      		activeDropdown = null;
      		e.target.innerHTML = document.getElementById('current-card').innerHTML;
      		document.getElementById('current-card').innerHTML = 'Master Card';
    	}
    	else if (e.target.innerHTML === 'American Express') {
        	document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          	activeDropdown.classList.remove('visible');
      		activeDropdown = null;
      		e.target.innerHTML = document.getElementById('current-card').innerHTML;
      		document.getElementById('current-card').innerHTML = 'American Express';
    	}
    	else if (e.target.innerHTML === 'Visa') {
	        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
	        activeDropdown.classList.remove('visible');
	      	activeDropdown = null;
	      	e.target.innerHTML = document.getElementById('current-card').innerHTML;
	      	document.getElementById('current-card').innerHTML = 'Visa';
    	}
  	}
  	else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    	activeDropdown.classList.remove('visible');
    	activeDropdown = null;
  	}
}
