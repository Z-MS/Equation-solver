

function solveEquation()
{
var output=document.getElementById("output");

var equation;

var equation2;
var a=document.forms[0].a.value;

var b=document.forms[0].b.value;


var c=document.forms[0].c.value;//default values for a,b,c

var myArray= [a,b,c];
  
equation= Math.round(((-1*b) + Math.sqrt((b*b) - 4*a*c))/ (2*a)*100)/100;//quadratic formula
 
equation2= Math.round(((-1*b) - 
Math.sqrt((b*b) - 4*a*c))/ 
(2*a)*100)/100;//second answer gotten
 
output.innerHTML="The answers are ="+" "+equation+" and "+equation2 ;
  
if(isNaN(equation)&&isNaN(equation2))
{
output.innerHTML="No answer";
}


function showWorking(){


	
denom=2*a;
numerator=Math.round(Math.sqrt((b*b)-4*a*c)*100)/100;
mid=-4*a*c;
	

workray=["step 1: "+ "-("+b+")" +"+&#8730;"/**unicode html symbol for square root**/+"("+b+"<sup>2</sup>"+"-"+4+"*"+a+"*"+c+")/(2*"+a+")",
"step 2 : "+ -b +"+&#8730;"+ b*b + mid +"/"+ 2*a,

"step 3: "+ -b +"+&#8730;"+ (b*b-4*a*c)+"/"+ denom,

"step 4: "+ -b +"+"+ Math.round(numerator*100)/100 +"/"+ denom,

"step 5: "+ Math.round((-b+numerator)*100)/100 +"/"+denom];//working of first answer



workray2=["step 1: "+ "-("+b+")" +"-&#8730;"/**unicode html symbol for square root**/+b+"<sup>2</sup>"+"-"+4+"*"+a+"*"+c+"/2*"+a,

"step 2 : "+ -b +"-&#8730;"+ b*b + mid +"/"+ 2*a,

"step 3: "+ -b +"-&#8730;"+ (b*b-4*a*c) +"/"+ denom,

"step 4: "+ -b +"-"+ numerator +"/"+ denom,

"step 5: "+ (-b-numerator) +"/"+ denom];//working of second answer


if(mid>1){
	workray.splice(1,1,"step 2 : "+ -b +"+&#8730;"+ b*b + "+" + -4*a*c +"/"+ 2*a);
	workray2.splice(1,1,"step 2 : "+ -b +"-&#8730;"+ b*b + "+" + -4*a*c +"/"+ 2*a);
	
	}




var header=document.getElementById("work").innerHTML="<b>WORKING</b>";	
var step1=document.getElementById("step1").innerHTML=workray[0]+" and "+workray2[0];
var step2=document.getElementById("step2").innerHTML=workray[1]+" and "+workray2[1];
var step3=document.getElementById("step3").innerHTML=workray[2]+" and "+workray2[2];
var step4=document.getElementById("step4").innerHTML=workray[3]+" and "+workray2[3];
var step5=document.getElementById("step5").innerHTML=workray[4]+" and "+workray2[4];
var ans=document.getElementById("ans").innerHTML="Final answers are" +" "+equation+" and "+equation2;


};

if(isNaN(equation)&&isNaN(equation2)) 
{
output.innerHTML="No answer";
$("#hide").hide("3000",function(){location.reload();});
	};
if(!isNaN(equation)&&!isNaN(equation2)){
	showWorking();

	
};


}
