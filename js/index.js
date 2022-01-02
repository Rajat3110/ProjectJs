let ar=[];
let ars=[]; 
var k=1;
function Add(){
 var n=document.getElementById("text").value;
 //console.log(n);
    if(n=="" || n==" ")
    {
        window.alert("Blank is not allowed!");
    }
    else{
    ar.push(n);
    ars.push(k);
    //console.log(ar.length);
    document.getElementById("text").value = "";
    disp();
    k++;
    }
}
    
    function disp()
    {
        var text="<ol style='display:flex; flex-direction:column;'>";
        for(let i=0;i<ar.length;i++)
        {
            var list="<section id='fi"+i+"'style=display:flex;> <li id='l"+i+"' style=list-style-type:none;>"+" "+ar[i]+"</li><i class='fa fa-pencil' onclick=Update("+i+") style=margin-left:10px;></i><i class='fa fa-trash-o' onclick=del("+i+") style=margin-left:10px;></i><br></section>";
            var sec="<section id=se"+i+" style=display:none;> <input  id=inpu"+i+" type=text><button onclick=save("+i+")><img src='icon/accept.png' width=20px height=20px/> </button><button onclick=cancle()><img src='icon/cancel.png' width=20px height=20px/></button></section>";
            text += "<section style='display:flex;  width:140px; justify-content:space-between; padding:10px;'>"+ars[i]+""+list+""+sec+"</section>";
            console.log(text);
        }
        text +="</ol>";
        //console.log(text);
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
    function Update(i)
    {
        let k="fi"+i;
        let l="se"+i;
        let m="inpu"+i;
        console.log(k); 
        document.getElementById(""+k+"").style.display = "none";
        document.getElementById(""+l+"").style.display = "flex";
        document.getElementById(""+m+"").value = ar[i];
        //document.getElementById("se"+i+"").style.display = flex;
    }
    function save(i)
    {
        console.log("hi");
        let m="inpu"+i;
        var v = document.getElementById(""+m+"").value;
        ar[i]=v;
        console.log(ar[i]);
        disp();
    }
    function cancle()
    {
        disp();
    }