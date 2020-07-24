//chapter1 
//task1
function c1t1() {
	alert("Hello! Welcome to Task 1");
}
//task2
function c1t2() {
	alert("Error! Please enter a valid password.");
}
//task3
function c1t3() {
	alert("Welcome to JS Land...\n Happy Coding!");
}
//task4
function c1t4() {
	alert("Welcome to JS Land...");
	alert("Happy Coding!...\n Prevent this page from creating additional dialogs.");
}

//task5
function c1t5() {
	console.log(alert("Hello... I can run JS through my web browser's console"));
}
//task6
function c1t6() {
	alert("Thank You! \n Your form has been successfully submited");
}

//Chapter2
//task1
function c2t1(){
	var username ="Nadia";
alert(username);
}
//task2
function c2t2(){
	var myName ="Nadia Bhutto";
alert(myName);
}
//task3
function c2t3(){
	var message ="Hello World!";
alert(message);
}
//task4
function c2t4(){
	var student ="Alveena";
	var age ="15 years old";
	var certified ="Certified Mobile Application Development";
alert(student);
alert(age);
alert(certified);
}
//task5
function c2t5(){
	var a ="PIZZA";
	var b ="PIZZ";
	var c ="PIZ";
	var d ="PI";
	var e ="P";
alert(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e);
}
//task6
function c2t6(){
	var myemail ="My email address is ";
	var javascript ="javascript@gmail.com";
alert(myemail + javascript);
}
//task7
function c2t7(){
	var g ="I am trying to learn the book ";
	var book ="A smarter way to learn JavaScript";
alert(g + book);
}
//task8
function c2t8() {
	document.write("<h2> yah! I can write HTML content through JavaScript.</h2>");
}
//task9
function c2t9(){
	var task9 ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(task9);
}

//Chapter3
//task1
function c3t1(){
	var age ="I am 16 years old";
alert(age);
}

function c3t2(){
	var visit ="You have visited this side 20 times";
alert(visit);
}

function c3t3(){
	var date_of_birth = "1992";
	document.write("<h2>" + "My birth year is " + date_of_birth + "</h2>");
	document.write("<h3> Data type of my declared variable is number.</h3>");
}

function c3t4(){
	var a = "Javeriya";
	var b = "Gul Ahmed Store.";
	var c = "4 Shirts";
	document.write("<h2>"+ a + " ordered " + c + " on " + b +"</h2>");
}

//Chapter4
//Task1
function c4t1(){
	var a, b, c ="0";
	alert("Check code!");
}
//Task2
function c4t2(){
    document.write("<h2> Legal:</h2>");
    document.write("<h4> var nadia786 = </h4>");
    document.write("<h4> var nadia_age_15 = </h4>");
    document.write("<h4> var $nadia = </h4>");
    document.write("<h4> var javaScript = </h4>");
    document.write("<h4> var naDia123 </h4>");
	document.write("<h2> Illegal:</h2>");
	document.write("<h4> var 786nadia = </h4>");
    document.write("<h4> var nadia_15_ = </h4>");
    document.write("<h4> var _nadia = </h4>");
    document.write("<h4> var %javaScript = </h4>");
    document.write("<h4> var naDia123_ </h4>");
}


//Chapter5
//Task1
function c5t1() {
      var a=prompt("Enter 1st number");
      var b=prompt("Enter 2nd number");
      var num1 = parseInt(a);
      var num2 = parseInt(b);
	  var res = num1 + num2;
	  document.write("Sum of "  + num1 + " and " + num2 + " is " + res);
}
//Task2
function c5t2() {
      var a=prompt("Enter 1st number");
      var b=prompt("Enter 2nd number");
      var num1 = parseInt(a);
      var num2 = parseInt(b);
	  var sum = num1 + num2;
	  var sub = num1 - num2;
	  var div = num1 / num2;
	  var mul = num1 * num2;
	  var mod = num1 % num2;
	  document.write("Adition of "  + num1 + " and " + num2 + " is " + sum + "." + " Subtraction of "  + num1 + " and " + num2 + " is " + sub + "." + " Division of "  + num1 + " and " + num2 + " is " + div + "." + " Multiplication of "  + num1 + " and " + num2 + " is " + mul + "." + " Modulus of "  + num1 + " and " + num2 + " is " + mod + ".");
}
//Task3
function c5t3() {
	var a;
	document.write(a + "<br>");
	var b = "5";
	document.write(" Initial value: " + b + "<br>");
	b++;
	document.write(" Value after increment is " + b + "<br>");
	var add = b + 7;
	document.write(" value after adition is " + add+ "<br>");
	add--;
	document.write(" Value after decrement is " + add+ "<br>");
	var mod = add % "3";
	document.write(" The remainder is: " + mod+ "<br>");
}
//Task4
function c5t4(){
	var a = 600;
	var b = 5;
	var mul = a * b;
	document.write("Total cost to buy " + b + " tickets to a movie is " + mul + "PKR");
}
//Task5
function c5t5(){
	var a = 5;
	for (var i=1; i<=10; i++ ){
	document.write(a + " x " + i + " = " + a*i + "<br>");
	}
}
//Task6
function c5t6(){
	var c=25.55;
	var f=78;
	var celsius=(f-32)*(5/9); 
	document.write( "Conversion of farenhiet " + f + " into Celsius is = " + celsius + "<br>");
	var farenhiet= (c*9/5)+32;
	document.write( "Conversion of celsius " + c + " into Farenhiet is = " + farenhiet);
}
//Task7
function c5t7(){
	var item1 = 650;
	var quantity = 3;
	var totalitem1 = item1*quantity;
	var item2 = 100;
	var quantity2 = 7;
	var totalitem2 = item2*quantity2;
	var DC = 100;
	var res = totalitem1+totalitem2+DC;
	document.write("<h1>Shopping Cart</h1>" + "<br>" + "Price of Item 1 is " + item1 + "<br>" + "Quantity of item 1 is " + quantity + "<br>" + "Price of Item 2 is " + item2 + "<br>" + "Quantity of item 2 is " + quantity2 + "<br>" + "Shipping charges is " + DC + "<br>" + "<br>" + "Total Cost of your order is " + res);
}
//Task8
function c5t8(){
	var t = 980;
	var o = 804;
	var div = o/t;
	var per = 100;
	var mul = div*per;
	document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "Total Marks: " + t + "<br>" + "Obtained Marks: " + o + "<br>" + "<br>" + "Percentage: " + mul + "%");
}
//Task9
function c5t9(){
	var us = 10;
	var s = 25;
	var res = s*28 + us*104.80;
    document.write("<h1>Currency in PKR</h1>" + "<br>" + "Total Currency in PKR: " + res);	
}
//Task10
function c5t10(){
	var num = 5;
	var res = ((num+5)*10)/2;
	document.write(res);
}
//Task11
function c5t11(){
	var cy = 2020;
	var by = 1998;
	var min = cy-by;
	document.write("<h1>Age Calculator</h1>" + "Current Year: " + cy + "<br>" + "Your Birth Year: " + by + "<br>" + "Your age is: " + min);
}
//Task12
function c5t12(){
	var radius = 20;
	var cir =(2*3.142)*radius;
	var a = 3.142*radius*radius;
	document.write("<h1>The Geometrizer</h1>" + "<br>" + "Radius of a circle: " + radius + "<br>" + "The Circumference is: " + cir + "<br>" + "The area is: " + a);
}
//Task13
function c5t13(){
	var fs = "Chocolate Chip";
	var age = 15;
	var e = 65;
	var a = 3;
	var min = e - age;
	var mul = min*a;
	document .write("<h1>The Life Time Supply Calculator</h1>" + "<br>" + "Favourite Snack: " + fs + "<br>" + "Current Age: " + age + "<br>" + "Estimated Maximum Age: " + e + "<br>" + "Amount of Snacks per day: " + a + "<br>" + "You will need " + mul + " Chocolate chip to last you until the ripe old age of " + e);
}

//Chapter6-9
//Task1
function c69t1(){
      var a= 10;
      document.write("<h2>Result:</h2>" + "<br>" + "The value a is: " + a + "<br>" + "..............................." + "<br>" + "<br>" );
      ++a
	  document.write("The value of a++ is: " + a +"<br>" + "Now the value of a++ is: " + a + "<br>" + "<br>");
	  document.write("The value of a++ is: " + a +"<br>");
	  ++a
	  document.write("Now the value of a is: " + a +"<br>" + "<br>");
	  --a
	   document.write("The value of --a is: " + a +"<br>");
	   document.write("Now the value of a is: " + a +"<br>" + "<br>");
	   document.write("Now the value of a-- is: " + a +"<br>");
	   --a
	   document.write("Now the value of a is: " + a);
}
//Task2
function c69t2(){
	var a = 2, b = 1;
	var res= --a - --b + ++b + b--;
	//--a;
	//--a - --b;
	//--a - --b + ++b;
	//--a - --b + ++b + b--;
	document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "Result is " + res);
}
//Task3
function c69t3(){
	var a= prompt("Enter Your Name");
	alert("Welcome to our site "+ a + "!");
}
//Task4
function c69t4(){
	var a = prompt("Enter the Table number")||5;
	var num1=parseInt(a);
	for (var i=1; i<=10; i++ ){
	document.write(num1 + " x " + i + " = " + num1*i + "<br>");
}
}
//Task5
function c69t5(){
	var a= prompt("Enter Your Subject Name");
	var b= prompt("Enter Your Subject Name");
	var c= prompt("Enter Your Subject Name");
	var tm = 100;
	var o1= prompt("Obtained Marks of 1st Subject");
	var ob1=parseInt(o1);
	var o2= prompt("Obtained Marks of 2nd Subject");
	var ob2=parseInt(o2);
	var o3= prompt("Obtained Marks of 3rd Subject");
	var ob3=parseInt(o3);
	var ob=ob1+ob2+ob3;
	var total= tm+tm+tm;
	var per1=(ob1/tm)*100;
	var per2=(ob2/tm)*100;
	var per3=(ob3/tm)*100;
	var per=(ob/total)*100;
	document.write("<table><tr><td>Subject</td><td>Obtained Marks</td><td>Total Marks</td><td>Percentage</td></tr>");
	document.write("<tr><td>" + a + "</td><td>"+ob1+"</td><td>"+tm+"</td><td>"+per1+"</td></tr>");
	document.write("<tr><td>" + b + "</td><td>"+ob2+"</td><td>"+tm+"</td><td>"+per2+"</td></tr>");
	document.write("<tr><td>" + c + "</td><td>"+ob3+"</td><td>"+tm+"</td><td>"+per3+"</td></tr>");
	document.write("<tr><td>" + "</td><td>"+ob+"</td>" + "<td>"+total+"</td><td>"+per+"</td></tr>");
	
}

//Chapter9-11

function c911t1(){
var city=prompt("Enter city Name");

if(city=='karachi'){
	document.write("Welcome to the city of Lights");
}else{
	document.write("Please Enter valid City Name");
}
}

function c911t2(){
var gen=prompt("Enter your Gender");
if(gen=='male'){
	document.write("Good Morning Sir");
}else{
	document.write("Good Morning Ma'am");
}
}

function c911t3(){
var tr=prompt("Enter trafic color");
if(tr=='red'){
	document.write("Must Stop");
}if(tr=='yellow'){
	document.write("Ready to move");
}if(tr=='green'){
	document.write("Move now");
}else{
	document.write("Please enter valid color");
}
}

function c911t4(){
	var fuel=prompt("Enter the Remaining Fuel in car");
	if(fuel<=0.25){
	document.write(" “Please refill the fuel in your car” ");
}else{
	document.write("ur fuel is filled");
}
}

function c911t5a(){
	 var a = 4;
     if (++a === 5){
     alert("given condition for variable a is true");
}
}

function c911t5b(){
	var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
}
}

function c911t5c(){
	 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
}

function c911t5d(){
	var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

}

function c911t5e(){
	 if (true){
     alert("True");
}
    if (false){
    alert("False");
}
}

function c911t5f(){
	  if("car" < "cat"){
alert("car is smaller than cat");
}

}

function c911t6(){
	var tt=300;
	var o1= prompt("Obtained Marks of 1st Subject");
	var ob1=parseInt(o1);
	var o2= prompt("Obtained Marks of 2nd Subject");
	var ob2=parseInt(o2);
	var o3= prompt("Obtained Marks of 3rd Subject");
	var ob3=parseInt(o3);
	var ob=ob1+ob2+ob3;
	var per= (ob/tt)*100;
	//var div= (ob/tt)*100;
	var grade;
	var rem;
	if(per>=80){
		grade="A-One";
		rem="Excellent";
		
	}if(per==70 || per<80){
		grade="A";
		rem="Good";
		
	}if(per==60 || per<70){
		grade="B";
		rem="You need to improve";
		
	}if(per<60){
		grade="Fail";
		rem="Sorry";
	}
		
document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "Total Marks: " + tt + "<br>" + "Marks Obtained: " + ob + "<br>" + "Percentage: " + per + "<br>" +"Grade: " + grade + "<br>" + "Remarks: " + rem);
	
}

function c911t7(){
	var num= 7;
	var s1= prompt("Guess the number between 1 to 10");
	if(s1==num){
		document.write("Correct!");
		
	}if(--num==s1){
		document.write("You are close enough");
		
	}else{
		document.write("Try again");
	}
}

function c911t8(){
	var mod= prompt("Input the number");
	if(mod%3==0){
		document.write("Its divisible by 3");
	}else{
		document.write("Its not divisible by 3");
	}
}

function c911t9(){
	var mod= prompt("Input the number");
	if(mod%2==0){
		document.write("Even Number");
	}else{
		document.write("Odd Number");
	}
}

function c911t10(){
	var a= prompt("Write Temperature");
	if(a==40){
  		document.write("It is too hot outside.");
	}if(a==30){
		document.write("The Weather today is Normal.");
	}if(a==20){
		document.write("Today’s Weather is cool.");
	}if(a==10){
		document.write("OMG! Today’s weather is so Cool.");
	}
}

function c911t11(){
	var num1= prompt("Write 1st num");
	var num2= prompt("Write 2nd num");
	var num3= prompt("Write Operation(+, -, *, /, %)");
	if(num3=="+"){
	document.write(num1 + num2);
	}if(num3=="-"){
	document.write(num1 - num2);
	}if(num3=="*"){
	document.write(num1 * num2);
	}if(num3=="/"){
	document.write(num1 / num2);
	}if(num3=="%"){
	document.write(num1 % num2);
	}
}

//Chapter12-13
//task1
function ch12t1(){
    var num1=prompt("Enter a character");
    var num =num1.charCodeAt(0);

    if(num >=65 && num <=90){
        document.write("You entered Capital letter");

    }if(num >=95 && num <=122){
        document.write("You entered Small letter");

    }if(num >=48 && num <=57){
        document.write("You Entered a Number");

    }else{
        document.write("you Entered a Special character");
    }
}

//task2
function ch12t2(){
    var num1=prompt("enter number 1");
    var num2=prompt("enter number 2");
    if(num1==num2){
        document.write("both numbers are equal");
    }if(num1>num2){
        document.write("num1 is greater than num2");
    }else{
        document.write("num1 is smaller than num2");
    }
}

//task3
function ch12t3(){
    var num1=prompt("enter number 1");
    //var num2=prompt("enter number 2");
    if(num1<0){
        document.write("number is negative");
    }if(num1==0){
        document.write("number is 0");

    }if(num1>0){
        document.write("number is positive");

    }
}

//task4
function ch12t4(){
    var val=prompt("enter any alphabet");
    if(val=='a'|| val=='e'|| val=='i' || val=='o' || val=='u'){
        document.write("true its a vowel");
    }else{
        document.write("false");
    }
}

//task5
function ch12t5(){
    var a='pass123';
    var val=prompt("enter ur password");
    if(a==val){
        document.write("password matched");
    }else{
        document.write("incorrect password");
    }
}

//task6
function ch12t6(){
     
	 var greeting;
     var hour = 13;
     if (hour < 18) { 
         greeting = "Good day";
      } else {
          greeting = "Good evening"; 
        }
        document.write(greeting);
}

//task 7
function ch12t7(){
        var time=prompt("enter time");
        if(time==0000 || time<1200){
            document.write("good morning");

        }if(time==1200 || time<1700){
            document.write("good afternoon");

        }if(time==1700 || time<2100){
            document.write("good evening");

        }if(time==2100 || time<2300){
            document.write("good night");

        }
}



//Chapter14-16
//task1
function c1416t1(){
   
   var arr=[];
   var st_name=prompt();
   var literal= {name:st_name,arr:arr};
   arr=literal.name;
   document.write(arr);   
}
//task2
function c1416t2(){

}
//task3
function c1416t3(){

var arry =[]
arry=["abc","efj","klm"];
document.write(arry); 
}

//task4
function c1416t4(){
var arry =[]
arry=[2,4,5];
document.write(arry);
} 
//task5
function c1416t5(){
var arry =[]
arry=[true,true,false];
document.write(arry);
}
//task6
function c1416t6(){
var arry =[]
arry=["abc",true,4];
document.write(arry);
}
//task7
function c1416t7(){
var arry =[]
arry=["SSC","HSC","BE","BCOM","MCOM","PHD"];
document.write(arry);
}
//task8
function c1416t8(){
}
//task9
function c1416t9(){
}
//task10
function c1416t10(){
var arry =[]
arry=[320,230,480,120];
document.write(arry.sort(function(a, b){return a - b}));
}
//task11
function c1416t11(){
var arry =[]
arry=["Islamabad","Hyderabad","Karachi","Lahore"];
document.write("Cities List: "+arry+"<br>");
document.write("Selected City: "+arry[0]+" "+arry[1]);
}
//task12
function c1416t12(){
var arry =[]
arry=["This", "is", "my", "cat"];
document.write("Array: "+arry+"<br>");
document.write("String: "+arry.join()+"<br>");

}
//task13
function c1416t13(){
}
//task14
function c1416t14(){
}
//task15
function c1416t15(){
arry=['Apple','Samsung','Motorola','Nokia','Sony','Haier'];

document.write("<select>");
document.write("<option> "+arry[0]+" </option>");
document.write("<option> "+arry[1]+" </option>");
document.write("<option> "+arry[2]+" </option>");
document.write("<option> "+arry[3]+" </option>");
document.write("<option> "+arry[4]+" </option>");
document.write("<option> "+arry[5]+" </option>");
document.write("</select>");

}

//Chapter17-20
function c1720t1(){
	var arry = [null][null];
}


function c1720t2(){
var arry1 = [1,2,3];
var arry2 = [0,1,2];
var arry3 = [1,0,1];

var final_arry = [arry1, arry2, arry3];
	document.write(arry1+"<br>"+arry2+"<br>"+arry3);
}

function c1720t3(){
for(var a=1; a<=10; a++){
	document.write(a+"<br>");
}
}


function c1720t4(){
var number=prompt("Enter a number shows its table of multiplication");
var length=prompt("Enter a length of multiplication table");

for(var i = number; i<=length; i++){
	document.write(number+" x "+i+" = "+i*number+" <br>");
}
} 

function c1720t5(){
fruits = ['apple','banna','mango','orange','stawberry'];

for(var i = 0; i<fruits.length; i++){
	document.write("Element at index "+i+" is "+fruits[i]+" <br>");
}
}

function c1720t6(){
document.write("Counting <br>");
for(var i = 0; i<=15; i++){
	document.write(i+", ");
}


document.write("<br><br>Reverse Counting <br>");
for(var i = 15; i>=0; i--){
	document.write(i+", ");
}

document.write("<br><br>Even <br>");
for(var i = 0; i<=15; i+=2){
	document.write(i+", ");
}

document.write("<br><br>Odd <br>");
for(var i = 1; i<=15; i+=2){
	document.write(i+", ");
}

document.write("<br><br>Series <br>");
for(var i = 0; i<=20; i+=2){
	document.write(i+"k, ");
}
}

function c1720t7(){
order=window.prompt("Welcome to ABC Bakery, What will you like to order?");

Arry = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var a = Arry.indexOf(order);

if(a == -1){
	document.write("We are sorry." + order + "is not available in our bakery.");
}else{
	document.write(order+" is available at index "+a+" in our bakery");	
}
}

function c1720t8(){
var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Largest number is "+Math.max(...arry));
}

function c1720t9(){
var arry = [24,53,78,91,12];

document.write("Array items: "+arry+"<br>");
document.write("The Smallest number is "+Math.min(...arry));
}

function c1720t10(){
for(var i=1; i<=20; i++ ){
	document.write(i*5+", ");
}
}




//Chapter 21-25

//Task 1
function c21t1(){
	var a= prompt("Enter your first name");
	var b= prompt("Enter your last name");
	alert("Welcome to my site " + a  + b  + "!");
}

//Task 2
function c21t2(){
	var a= prompt("Write your fav phone", "My favourite phone is: ");
	document.write("My favourite phone is: " + a + "<br>" + "Length of string: "+ a.length);
}

//Task 3
function c21t3(){
    var a = "Pakistani";
    var b = a.indexOf("n");
	document.write("String: " + a + "<br>" + "Index of 'n': " + b);	
}

//Task 4
function c21t4(){
	var a = "Hello World";
    var b = a.lastIndexOf("l");
	document.write("String: " + a + "<br>" + "Last Index of 'l': " + b);
} 

//Task 5
function c21t5(){
	var a = "Pakistani";
    var b = a.charAt("3");
	document.write("String: " + a + "<br>" + "Character at index '3' : " + b);
} 

//Task 6
function c21t6(){
	var a= prompt("Enter your first name");
	var b= prompt("Enter your last name");
    var res = a.concat(b);
	document.write("Welcome to my site " + res + "!");
}

//Task 7
function c21t7(){
	var a= "Hyderabad";
	var res = a.replace("Hyder", "Islam");
	document.write("City: " + a + "<br>" + "After replacement: " + res);
}

//Task8
function c21t8(){
	var a= "and";
	var res = a.replace("and", "&");
	document.write("Ali and Sami are best friends. They play cricket and football together." + "<br>" + "After replacement: " + "Ali " + res + " Sami are best friends, They play cricket " + res + " football together.");
}

//Task9
function c21t9(){
	var a = "472"
	var b= parseInt(a);
	document.write("Value: " + a + "<br>" + "Type: " + typeof(a) + "<br>" + "Value: " + b + "<br>" + "Type: " + typeof(b));
}

//Task10
function c21t10(){
	var a = prompt("Write anything");
	var b = a.toUpperCase();
	document.write("User Input: " + a + "<br>" + "Upper Case: " + b);
}

//Task11
function c21t11(){
var str = "nadia kanwal";
var str = str.toLowerCase();
var strToArr = str.split(" ");
var capsArr = [];
for (var i = 0; i < strToArr.length; i++) {
    var x = strToArr[i][0].toUpperCase() + strToArr[i].substring(1,)
    capsArr.push(x)
}
var finalStr = capsArr.join(" ")
document.write(finalStr);
}

//Task12
function c21t12(){
	var num = 35.36;
	var str = num.toString();
	var res = str.replace(".","");
	document.write("Number: " + num + "<br>" + "Result: " + res);
}

//Task13
function c21t13(){
	var a = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
	var b = prompt("Search Item");
	var searchitem = b.toLowerCase();
	if(a.indexOf(searchitem)==-1){
    document.write("We are sorry. " +  searchitem + " is not available in our bakery");
	}else{document.write(searchitem + " is available at index" + b.indexOf(a) + " in our bakery");
	}
}

//Task14
function c21t14(){
	var str = "University of Hyderabad";
    var res = str.split("");
	document.write(res);
}


//Task15
function c21t15(){
    var str = prompt("Enter any word"); 
    var res = str.charAt(str.length-1);
    document.write("User input: " + str + "<br>" + "Last character of input: " + res); 
}

//Task16
function c21t16(){
   var string = "The quick brown fox and jump over the lazy dogs";
    sp = string.split("");
	var count = 0;
	
    for(var i = 0; i < sp.length; i++) {
     if(sp[i] === "the"){
		 count++;
	 }else{
		 sp[i]=sp[i]+1;
	 }
  }
  document.write("Text: " + string + "<br>" + "There are " + count + " occurrence of word 'the'");
}

//Chapter 26-30

//Task1
function c26t1(){
 var userInput = +prompt("Enter a Positive Integer");
    document.write("Number: " + userInput + "<br>");
    document.write("Round of value: " + Math.round(userInput) + "<br>");
    document.write("Floor value: " + Math.floor(userInput) + "<br>");
    document.write("Ceil value: " + Math.ceil(userInput));
}

//Task2
function c26t2(){
     var userInput = +prompt("Enter a Negative Integer");
     document.write("Number: " + userInput + "<br>");
     document.write("Round of value: " + Math.round(userInput) + "<br>");
     document.write("Floor value: " + Math.floor(userInput) + "<br>");
     document.write("Ceil value: " + Math.ceil(userInput));
}

//Task3
function c26t3(){
     var userInput = +prompt("Enter any number to see it's absolute value");
     document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));
}

//Task4
function c26t4(){
    var dice = Math.floor(Math.random() * 6) + 1;
    document.write("Random dice value: " + dice + "<br>");
}

//Task5
function c26t5(){
    var coin = Math.floor(Math.random() * 2) + 1;
    if (coin == 2) {    
    document.write(coin + "<br>");
    document.write("Random coin value: Heads");
    }
     else {
    document.write(coin + "<br>");
    document.write("Random coin value: Tails");    
    }
}

//Task6
function c26t6(){
    var rand = Math.floor(Math.random() * 100) + 1;
    document.write("Random number between 1 and 100: " + rand);
}

//Task7
function c26t7(){
    var userInput = prompt("Enter your weight in kilograms");
    var possibleInputs = ["kgs","kilogram","kg","kilograms"];
    var finalWeight;
    for (var i = 0; i < possibleInputs.length; i++) {
    if (userInput.includes(possibleInputs[i])) {
    finalWeight = userInput.replace(possibleInputs[i]," kilograms");
    break;
    }
    else {
    finalWeight = userInput + " kilograms";
    continue;
     }
    }
    document.write("The weight of user is " + finalWeight);
}

//Task8
function c26t8(){
    var randSecret = Math.floor(Math.random() * 10) + 1;
    alert(randSecret);
    var userInput = +prompt("Enter a number between 1 to 10");
    if (userInput == randSecret) {
    alert("Congratulations, You Won");
    }
    else {
    alert("Please Try Again");
    }
}

//Chapter 31-34

//Task1
function c31t1(){
    var currentDate = new Date();
    document.write(currentDate);
}

//Task2
function c31t2(){
    var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    document.write("Current month: " + allMonths[currentMonth]);
}

//Task3
function c31t3(){
     var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     var currentDate = new Date();
     var currentDay = currentDate.getDay();
     alert("Today is " + allDays[currentDay].slice(0,3));
}

//Task4
function c31t4(){
     var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     var currentDate = new Date();
     var currentDay = allDays[currentDate.getDay()];
     if (currentDay == "Sunday" || currentDay == "Saturday") {
     document.write("It’s Fun day");
    }
}

//Task5
function c31t5(){
    var currentDate = new Date();
    currentDate = currentDate.getDate();
    if (currentDate < 16) {
    document.write("First fifteen days of the month");
    } else {
    document.write("Last days of the month");
    }
}

//Task6
function c31t6(){
    var currentDate = new Date();
    var currentDateMilli = currentDate.getTime();
    var dateBefore = new Date("Jan 01, 1970");
    var dateBeforeMilli = dateBefore.getTime();
    var diff = currentDateMilli - dateBeforeMilli;
    var diffInMin = diff / (1000 * 60 * 60);
    document.write("Current Date: " + currentDate + "<br>");
    document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
    document.write("Elapsed minutes since January 1, 1970:  " + diffInMin + "<br>");
}

//Task7
function c31t7(){
     var currentDate = new Date();
     var currentHour = currentDate.getHours();
     if (currentHour <= 12) {
       alert("It's AM");
     } else {
       alert("It's PM");
    }
}

//Task8
function c31t8(){
      var laterDate = new Date("Dec 31, 2020");
      document.write("Later date: " + laterDate);
}

//Task9
function c31t9(){
     var ramadanStartDate = new Date("Apr 24, 2020");
     var currentDate = new Date();
     var diffTime = currentDate - ramadanStartDate;
     var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
     document.write(diffDays + " days have passed since 1st Ramadan, 2020 :)");
}

//Task10
function c31t10(){
    var yearBegDate = new Date("Jan 01, 2020");
    var currentDate = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
    var yearBegDateMilli = yearBegDate.getTime();
    var currentDateMilli = currentDate.getTime();
    var diff = yearBegDateMilli - currentDateMilli;
    var diffInSeconds = Math.abs(diff / 1000);
    document.write(diffInSeconds + " seconds had past since begining of 2020");

}

//Task11
function c31t11(){
    var currentDate = new Date();
    document.write("Current date: " + currentDate + "<br>");    
    var setHours = currentDate.setHours(15);
    document.write("1 hour ago, it was: " + currentDate);
}

//Task12
function c31t12(){
     var currentDate = new Date();
     var getCurrentYear = currentDate.getFullYear();
    document.write("Current date: " + currentDate + "<br>");    
    var setHours = currentDate.setFullYear(getCurrentYear-100);
     document.write("100 years back, it was: " + currentDate);
}

//Task13
function c31t13(){
     var userAge = +prompt("Enter your age");
     var currentDate = new Date();
     var getCurrentYear = currentDate.getFullYear();
     var birthYear = getCurrentYear - userAge;
     document.write("Your age is " + userAge + "<br>");
     document.write("Your birth year is " + birthYear + "<br>");
}

//Task14
function c31t14(){
     var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     var customerName = "Nadia Kanwal Bhutto";
     var currentMonth = new Date().getMonth();
     currentMonth = Month[currentMonth];
     var noOfUnits = 410;
     var chargesPerUnit = 16;
     var lateAmount = 350;
	 
	 document.write("<h2>K-Eletric Bill</h2>" + "<br>");
     document.write("Customer Name: " + customerName + "<br>");
     document.write("Month: " + currentMonth + "<br>");
     document.write("Number of Units: " + noOfUnits + "<br>");
     document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
     document.write("<br>");
     document.write("Net Amout Payable (within Due Date): " + noOfUnits*chargesPerUnit + "<br>");
     document.write("Late Payment Surcharge: " + lateAmount + "<br>");
     document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*chargesPerUnit)+lateAmount) + "<br>");
        

}

//Chapter 35-38
//Task1
function c35t1(){
	 function showDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
    }
    showDateTime();
}

//Task2
function c35t2(){
	function greetingsUser(fname,lname) {
    var fullName = fname + " " + lname;
     alert("Welcome! Dear " + fullName);
    }
    var askFirstName = prompt("Enter Your First Name");
    var askLastName = prompt("Enter Your Last Name");
    greetingsUser(askFirstName,askLastName);
}

//Task3
function c35t3(){
	 function sumOfTwo(n,k) {
       return sum = n + k;
     }
     var askFirstNum = +prompt("Enter First Number");
     var askSecondNum = +prompt("Enter Second Number");
     document.write(sumOfTwo(askFirstNum,askSecondNum));
}

//Task4
function c35t4(){
	 function calc(num1,num2,opr) {
        if (opr === "+") {
           return num1 + num2; 
         } 
        else if(opr === "-") {
            return num1 - num2;
         }
        else if(opr === "/") {
            return num1 / num2;
         }
        else if(opr === "*") {
             return num1 * num2;
         }
        else if(opr === "%") {
             return num1 % num2;
         }
        else {
             return "Wrong Command";
        }
   }
     var num1 = +prompt("Enter First Number");
     var num2 = +prompt("Enter Second Number");
     var opr = prompt("Enter Operator");
     alert("Equation is " + num1 + opr + num2 + "\nOutput is " + calc(num1,num2,opr));
 
}

//Task5
function c35t5(){
	   function squareMe(x) {
       alert("Input is "+x + "\nSquare is " + x*x);
     }
       squareMe(+prompt("Enter any number"));
}

//Task6
function c35t6(){
	 function numFactorial(x) {
     var initial = x;
     for (var i = x-1; i > 0; i--) {
            x *= i;
      }
    alert("Input is "+initial + "\nFactorial is " + x);
    }
    numFactorial(+prompt("Enter any number"));
}

//Task7
function c35t7(){
	  function displayCounting(x,y) {
      for (var i = x; i <= y; i++) 
	  document.write(i + "<br>");
        }
     displayCounting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));
}

//Task8
function c35t8(){
	 function calculateHypotenuse(base,perpendicular) {
     var finalHypotenuse;
     var hypSquare = Math.pow(base,2) + Math.pow(perpendicular,2);
     function calculateSquare(hyp) {
     finalHypotenuse = Math.sqrt(hyp).toFixed(2);
     return finalHypotenuse;
     }
     calculateSquare(hypSquare);
     return finalHypotenuse;
     }
     document.write(calculateHypotenuse(10,10));
}

//Task9
function c35t9(){
	 function calcArea(w,h) {
     var A = w * h;
     return A;
     }
    alert("Area of Rectengle: " + calcArea(20,10)); 
    var width = 20;
    var height = 10;
    alert("Area of Rectengle: " + calcArea(width,height));
}

//Task10
function c35t10(){
	 function checkPalindrome(str) {
     var reversed = "";
     for (var i = str.length-1; i >= 0; i--) {
     reversed += str[i];
     }
     if (str === reversed) {
     alert("It's a Palindrome");
     } else {
     alert("It's not a Palindrome");
     }
    }
    checkPalindrome(prompt("Enter a string to check it's Palindrome or not"));
}

//Task11
function c35t11(){
    function titleCase(str) {
    var splitted = str.split(" ");
    for (var i = 0; i < splitted.length; i++) {
    document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    }
    }
   titleCase(prompt("Enter any word here","This is a sample text").toLowerCase());
}

//Task12
function c35t12(){
	function findLongest(str) {
    var strToArr = str.split(" ")
    var longest = strToArr[0];
    for (var i = 1; i < strToArr.length; i++) {
    if (strToArr[i].length > longest.length ) {
    longest = strToArr[i];
	}
    }
    document.write("String: " + str + "<br>Longest Word: " + longest);
    }
    findLongest("My name is nadiakanwalbhutto."); 
}

//Task13
function c35t13(){
	function findOcc(str,ltr) {
    var spilitted = str.toLowerCase().split("");
    var occurances = 0;
    for (var i = 0; i < spilitted.length; i++) {
    if(spilitted[i] == ltr) {
    occurances++;
    }
    }
    document.write("Text: " + str + "<br>");
    document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    }
    var str = "The quick brown fox jumps over lazy the dog";
    var ltr = "o";
    findOcc(str,ltr);
}

//Task14
function c35t14(){
	 function calcCircumference(r = 10) {
     var circumference = (2 * 3.142 * r).toFixed(2);
     alert("The circumference is " + circumference);
     }
    function calcArea(r = 10) {
    var area = (3.142 * (r*r)).toFixed(2);
    alert("The area is " + area);
     }
    calcCircumference();
    calcArea();
}




















