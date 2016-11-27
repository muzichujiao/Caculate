function caculate(containerID){
	var container = document.getElementById(containerID);
	//创造出div和input
	var main = document.createElement("div");
	var mainButton = document.createElement("div");
	var textbook = document.createElement("input");
	var invalue = ["9","8","7","6","5","4","3","2", "1"];
	var opera = ["-","*","/"];
	textbook.value = 0;
	//插入
	container.appendChild(main);
	main.appendChild(textbook);
	main.appendChild(mainButton);
	//设置属性
	textbook.setAttribute("class","iinput");
	main.setAttribute("class" , "colmain");
	mainButton.setAttribute("class" , "buttonset");
	//定义变量
	var textinput;			//保存input的value值
	var first;				//第一操作数
	var second;				//第二操作数
	var operate;			//记录计算符
	var already = false;	//记录是否计算过
	var memory = 0;			//指向第一、二操作数
	var op = 0;


	//获取一、二操作数
	function get(obj){
		if(already == true){
			textbook.value = "0";
			already = false;
		}
		//这是考虑first==0时
		if(first == 0){
			if((already == false) && operate &&(!second)){
				memory = 1;
					if(op == 0){
					textbook.value = 0;
				}
			
			}
		}
		if((already == false) && operate && first &&(!second)){
			memory = 1;
			if(op == 0){
				textbook.value = 0;
			}
		}
		if(textbook.value == "0"){
			textbook.value = obj.innerHTML;
		}else{
			textbook.value = textbook.value+obj.innerHTML;		
		}
		if(memory == 0){
			first = textbook.value;			
		}else{
			second = textbook.value;	
		}
		op = 0;
	}
	//根号函数
	function sqrtB() {
		var str = textbook.value;
		str = Math.sqrt(str);
		if(isNaN(str)){str = "Error";}
		textbook.value =str;
		if(memory == 0){
			first = str;
		}else{
			second = str;
		}
		already = true;
	}
	//导数
	function derivative(){
		var str = textbook.value;
		if(str == "0"){
			textbook.value = "Error";
		}else{
			str = 1/(str - 0);
			textbook.value = str;
		}
		if(memory == 0){
			first = str;
		}else{
			second = str;
		}
		already = true;
	}
	//删除输入框内容
 	function clearNow(){
 		textbook.value="0";
 		if(operate&&first){
 			memory = 1;
 		}
 		if(memory == 0){
 			first = 0;
 		} else{
 			second = 0;
 		}
 		if((operate == "/" ||operate =="-" ||operate=="*" ||operate=="+" )&&memory == 1){
 			second = String(0);
 		}

 	}
	 //删除所有
  	function clearAll(){
 		textbook.value = "0";
 		textinput = "";
		first = 0;
		second = 0;
 		operate = 0;
 		already = false;
 		memory = 0;
 	}
 	//一个一个删除
 	 function del(){ 
		var str=String(textbook.value);
		//计算结果不能删除 
		if(already == false){	
			str=(str!="0") ? str : ""; 
 			str=str.substr(0,str.length-1); 
 			if(str == "-"||str =="-0"){
 				str = "0";
 			}else{
 				str=(str!="") ? str : "0"; 
 			}
 			textbook.value=str; 
		}
 	} 
 	//获得符号
 	function operateCu (obj){
		if(memory == 1){
			textbook.value = result();
			second = "";
		}
		operate = obj.innerHTML;
		
		second = "";
		if(!first&&memory == 0){
			first = parseFloat(0);
		}
		if(first == "Error"){
			first = "0";
			second = "0";
			operate = "0";
			memory = "0";
			op = "0";
			i = 0;
		}
	}
	//负号
 	function mines() {
 		var str = String(textbook.value);
 		if(str == "0."){
 			str = "-"+str;
 		}
 		else if(str == "-0."){
 			str ="0."
 		}
 		else if(str.substr(str.length-1,1) == "."){
 			str = -str+".";
 		}
 		else{
 			str = -str;
 		}
		textbook.value =str;
		if(memory == 0){
			first = str;
		}else{
			second = str;
 		}
	}
	//.小数点
	function dotA(){ 
 		var str = String(textbook.value);
 		if(already == true){
 			clearAll();
 			textbook.value = "0."	
 		}
 		if(first&&operate&&!second){
 			str = "0";
 			textbook.value = "0.";
 			op = 1;
 		}
 		for(i=0; i<=str.length;i++){ 
			if(str.substr(i,1)==".") {
				return false; 
			} 
		}
		str=str + "."; 
 		textbook.value=str;  	
 	} 
 	//=
 	function result(){
 		if(!operate){
 			var name = textbook.value;
			name = parseFloat(name);
			textbook.value = name;
			already = true;
		}
		if(operate == "-"){		
			if(!second){
				second = first;
			}
			first = parseFloat((first- 0) - (second - 0));
			if(isNaN(first)){
				first = "Error";
			}
			if(first == "defined" ||first == "undefined"){
				first = "Error";
			}
			textbook.value = first;
			already = true;
			memory = 0;
		}
		if(operate == "+"){
			if(!second&&operate){
				second = first;
			}
			first = parseFloat((first- 0) + (second - 0));
			// textinput = document.getElementById("textbook");
			if(isNaN(first)){
				first = "Error";
			}
			if(first == "defined" ||first == "undefined"){
				first = "Error";
			}
			textbook.value = first; 
			already = true;
			memory = 0;	
		}
		if(operate == "*"){	
			if(!second&&operate){
				second = first;
			}
		
			first =parseFloat((first- 0) * (second - 0));
			// textinput = document.getElementById("textbook");
			if(isNaN(first)){
				first = "Error";
			}
			if(first == "defined" ||first == "undefined"){
				first ="Error";
			}
			textbook.value = first;
			already = true;
		
			memory = 0;
		}	
		if(operate == "/"){
			if(second == 0){
				first = "Error";
			}else{
				if(!second){
					second = first;
				}
			}
			first = parseFloat((first- 0) / (second - 0));
			if(isNaN(first)){
				first = "Error";
			}
			if(first == "defined" ||first == "undefined"){
				first ="Error";
			}
			if(second == 0){
				first = "Error";
			}
			textbook.value = first;
			already = true;
			memory = 0;
		}
		return first;
	}

	//创造button并排列
	var button_1 = document.createElement("button");
	button_1.innerHTML = "%";
	mainButton.appendChild(button_1);

	var button_2 = document.createElement("button");
	button_2.innerHTML = "√";
	mainButton.appendChild(button_2);
	button_2.onclick = function(){sqrtB()};

	var button_3 = document.createElement("button");
	button_3.innerHTML = "1/x";
	mainButton.appendChild(button_3);
	button_3.onclick = function(){derivative()}

	var button_4 = document.createElement("button");
	button_4.innerHTML = "x^2";
	mainButton.appendChild(button_4);

	var button_5 = document.createElement("button");
	button_5.innerHTML = "CE";
	mainButton.appendChild(button_5);
	button_5.onclick = function(){clearNow()};

	var button_6 = document.createElement("button");
	button_6.innerHTML = "C";
	mainButton.appendChild(button_6);
	button_6.onclick = function(){clearAll()};


	var button_7 = document.createElement("button");
	button_7.innerHTML = "←";
	mainButton.appendChild(button_7);
	button_7.onclick = function(){del()};

	var button_8 = document.createElement("button");
	button_8.innerHTML = "+";
	mainButton.appendChild(button_8);
	button_8.onclick = function(){operateCu(this)};
	var i;
	
	for(i=0 ; i<3 ; i++){ // 创造四个button
		var button = document.createElement("button");
		button.innerHTML = invalue[i];
		mainButton.appendChild(button);
		button.onclick = function(){get(this)};//获得<button>里的值
	}
	
	var button_9 = document.createElement("button");
	button_9.innerHTML = opera[0];
	mainButton.appendChild(button_9);
	button_9.onclick = function(){operateCu(this)};//获得<button>里的值
	
	for(i; i<6 ;i++){
		var button = document.createElement("button");
		button.innerHTML = invalue[i]
		mainButton.appendChild(button);
		button.onclick = function(){get(this)};//获得<button>里的值
	}
	
	var button_13 = document.createElement("button");
	button_13.innerHTML = opera[1];
	mainButton.appendChild(button_13);
	button_13.onclick = function(){operateCu(this)};//获得<button>里的值
	
	for(i; i<9 ;i++){
		var button = document.createElement("button");
		button.innerHTML = invalue[i]
		mainButton.appendChild(button);
		button.onclick = function(){get(this)};//获得<button>里的值
	}
	
	var button_10 = document.createElement("button");
	button_10.innerHTML = opera[2];
	mainButton.appendChild(button_10);
	button_10.onclick = function(){operateCu(this)};//获得<button>里的值

	var button_11 = document.createElement("button");
	button_11.innerHTML = "±";
	mainButton.appendChild(button_11);
	button_11.onclick = function(){mines()};//获得<button>里的值

	var button_12 = document.createElement("button");
	button_12.innerHTML = "0";
	mainButton.appendChild(button_12);
	button_12.onclick = function(){get(this)};//获得<button>里的值

	var button_13 = document.createElement("button");
	button_13.innerHTML = ".";
	mainButton.appendChild(button_13);
	button_13.onclick = function(){dotA()};//获得<button>里的值
	
	var button_14 = document.createElement("button");
	button_14.innerHTML = "=";
	mainButton.appendChild(button_14);
	button_14.onclick = function(){result()};//获得<button>里的值
}
caculate("cacul");















