
function runBack(){
  var val =document.cal.display.value.slice(0, -1);
  document.cal.display.value = val;
};
function calcsqrt() 
{
var number=cal.display.value;
var ans=Math.sqrt(number);
if (number<0) ans="Invalid";
cal.display.value=ans;
}
function inverse(){
var inv=cal.display.value;
cal.display.value=1/inv;
}
