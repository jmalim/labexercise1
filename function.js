var disp = document.getElementById("disp");
function ud(n){ 
disp.innerHTML += n ;
}
function equals(){
c=eval(disp.innerHTML);
disp.innerHTML=c;
}
function clear(){
disp.innerHTML='';
}

document.getElementById("1").addEventListener("click",function(){ ud(1); });
document.getElementById("2").addEventListener("click",function(){ ud(2); });
document.getElementById("3").addEventListener("click",function(){ ud(3); });
document.getElementById("4").addEventListener("click",function(){ ud(4); });
document.getElementById("5").addEventListener("click",function(){ ud(5); });
document.getElementById("6").addEventListener("click",function(){ ud(6); });
document.getElementById("7").addEventListener("click",function(){ ud(7); });
document.getElementById("8").addEventListener("click",function(){ ud(8); });
document.getElementById("9").addEventListener("click",function(){ ud(9); });
document.getElementById("0").addEventListener("click",function(){ ud(0); });
document.getElementById("dec").addEventListener("click",function(){ ud('.'); });

document.getElementById("add").addEventListener("click",function(){ ud('+'); });
document.getElementById("minus").addEventListener("click",function(){ ud('-'); });
document.getElementById("multiply").addEventListener("click",function(){ ud('*'); });
document.getElementById("divide").addEventListener("click",function(){ ud('/'); });

document.getElementById("clear").addEventListener("click",function(){clear(); });
document.getElementById("equals").addEventListener("click",function(){ equals(); });