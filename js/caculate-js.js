var textinput;
var first;
var second;
var operate;
var already = false
var memory = 0;

function get(obj){
	if(already == false && operate && first &&(!second)){
		memory = 1;
		document.getElementById("textbook").value = 0;
	}
	/*if(afterCaculate == true && memory == 0){
		document.getElementById("textbook").value = 0;
		afterCaculate = false;
	}*/
	if(already == true){
		document.getElementById("textbook").value = "0";
	}
	if(document.getElementById("textbook").value == "0"){
		document.getElementById("textbook").value = obj.innerHTML;
	}else{
		document.getElementById("textbook").value +=obj.innerHTML;
	}
	if(memory == 0){
		first = document.getElementById("textbook").value;
	}else{
		second = document.getElementById("textbook").value;
	}


}


function operateCu (obj){
	operate = obj.innerHTML;
	if( operate == "1/x"){
		if(!second){
			second = 0;
		}
		first = 1 / (first - 0) + second;
		textinput = document.getElementById("textbook");
		textinput.value = first;
		memory = 0;
	}else{
		if(memory == 0){
			memory = 1;
		}
		second = 0;
		already = false;
	}
	
}
function result(obj){
	if(operate == "+"){
		if(!second){
			second = first;
		}
		first = (first - 0) + (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first; 
		already = true;
		memory = 0;
		
	}
	if(operate == "-"){
		if(!second){
			second = first;
		}
		first = (first- 0) - (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		already = true;
		memory = 0;
	}
	if(operate == "*"){
		if(!second){
			second = first;
		}
		first = (first- 0) * (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		already = true;
		memory = 0;
	}
	if(operate == "/"){
		if(!second){
			second = first;
		}
		first = (first- 0) / (second - 0);
		textinput = document.getElementById("textbook");
		if(second == 0){
			textinput.value = "除数不能为0";
		}else{
			textinput.value = first;
		}
		
		already = true;
		memory = 0;
	}
	if(operate == "%"){
		if(!second){
			second = first;
		}
		first = (first- 0) % (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		already = true;
		memory = 0;
	}


}
 function dot(){ 
 	var str=String(document.getElementById("textbook").value);
 	if(str != "0"){
 		str = str;
 	} else{
 		str = "0";
 	}
 	for(i=0; i<=str.length;i++){ 
		if(str.substr(i,1)==".") 
			return false; 
		} 
	str=str + "."; 
 	document.getElementById("textbook").value=str; 
 	
 } 
 function del(){ 
	var str=String(document.getElementById("textbook").value); 
 	str=(str!="0") ? str : ""; 
 	str=str.substr(0,str.length-1); 
 	str=(str!="") ? str : "0"; 
 	document.getElementById("textbook").value=str; 
 } 
 function clearNow(){
 	document.getElementById("textbook").value="0"; 
 }
 function clearAll(){
 	document.getElementById("textbook").value = "0";
 	first = "0";
 	second = "0";
 	operate = "0";
 	memory = 0;
 }
 function mines() {
 	var str = document.getElementById("textbook").value;
	str = parseFloat(-str);
	document.getElementById("textbook").value =str;
	if(memory == 0){
		first = str;
	}else{
		second = str;
 	}
}
function sqrtB() {
	var str = document.getElementById("textbook").value;
	str = Math.sqrt(str);
	document.getElementById("textbook").value =str;
	if(memory == 0){
		first = str;
	}else{
		second = str;
	}
}