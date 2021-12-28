let ar=[];
let ars=[]; 
var k=1;
function Add(){
 var n=document.getElementById("text").value;
 //console.log(n);
    ar.push(n);
    ars.push(k);
    //console.log(ar.length);
    document.getElementById("text").value = "";
    disp();
    k++;

}
    function disp()
    {
        var text="<ol style='display:flex;flex-direction: column;'>";
        for(let i=0;i<ar.length;i++)
        {
            text +="<li style='list-style-type:none'>"+ars[i]+"  "+ar[i]+"<i class='fa fa-trash-o' onclick=del("+i+") style='margin-left:20px;'></i></li><br>";
            //console.log(text);
        }
        text +="</ol>";
        console.log(text);
        document.getElementById("auto").innerHTML = text;
    }
    function del(i)
    {
        ar.splice(i,1);
        ars.splice(i,1);
        document.getElementById("auto").innerHTML = "";
       // console.log(ar);
        disp();
        
    }