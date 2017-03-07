var notStu=document.getElementById("notStudent");
var stu=document.getElementById("student");
var city=document.getElementById("cities");
var emp=document.getElementById("employer");
var unis=document.getElementsByClassName("a2");

function c2u(str) {
  switch(str) {
    case "b":return unis[0];
    case "s":return unis[1];
    case "w":return unis[2];
            }
}
//通过城市选择学校的函数
var a=c2u(city.value); //储存实时的value
notStu.onclick=function() {
  city.style.display="none";
  a=c2u(city.value);
  a.style.display="none";
  emp.style.display="inline";
}
//仅仅可视化输入框
stu.onclick=function() {
  emp.style.display="none";
  a=c2u(city.value);
  city.style.display="inline";
  a.style.display="inline";
}
//仅仅可视化学校选择
city.onchange=function() {
  a.style.display="none";
  a=c2u(city.value);
  a.style.display="inline";
}