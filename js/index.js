let ar=[]; 
function Add(){
 var n=document.getElementById("text").value;
 //console.log(n);    
 ar.push(n);
 document.getElementById("text").value = "";
 var text="<ul>";
 for(let i=0;i<ar.length;i++)
 {
     text +="<li>"+ar[i]+"</li><br>";
     //console.log(text);
 }
 text +="</ul>";
 document.getElementById("auto").innerHTML = text;
}