var textinput;
var first;
var second;
var operate;
var pointer = 1;
var afterCaculate  = false;



function get(obj){
	if(afterCaculate == false && operate && first &&(!second)){
		pointer = 2;
		document.getElementById("textbook").value = 0;
	}
	if(afterCaculate == true && pointer == 1){
		document.getElementById("textbook").value = 0;
		afterCaculate = false;
	}
	textinput = document.getElementById("textbook");
	if(textinput.value == "0"){
		textinput.value = obj.innerHTML;
	}
	else{
		textinput.value = textinput.value + obj.innerHTML;
	}


	if(pointer == 1){
		first = textinput.value;
	}else if(pointer == 2){
		second = textinput.value;
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
		pointer = 1;
	}else{
		if(pointer == 1){
		pointer = 2;
	}
	second = 0;
	afterCaculate = false;
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
		pointer = 1;
		
	}
	if(operate == "-"){
		if(!second){
			second = first;
		}
		first = (first- 0) - (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		pointer = 1;
	}
	if(operate == "*"){
		if(!second){
			second = first;
		}
		first = (first- 0) * (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		pointer = 1;
	}
	if(operate == "/"){
		if(!second){
			second = first;
		}
		first = (first- 0) / (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		pointer = 1;
	}
	if(operate == "%"){
		if(!second){
			second = first;
		}
		first = (first- 0) % (second - 0);
		textinput = document.getElementById("textbook");
		textinput.value = first;
		pointer = 1;
	}


}