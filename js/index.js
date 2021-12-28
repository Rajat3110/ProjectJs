let ar=[]; 
function Add(){
 var n=document.getElementById("text").value;
 //console.log(n);
    ar.push(n);
    //console.log(ar.length);
    document.getElementById("text").value = "";
    disp();

}
    function disp()
    {
        var text="<ol style='display:flex;flex-direction: column;'>";
        for(let i=0;i<ar.length;i++)
        {
            text +="<li>"+ar[i]+"<i class='fa fa-trash-o' onclick=del("+i+") style='margin-left:20px;'></i></li><br>";
            //console.log(text);
        }
        text +="</ol>";
      //  console.log(text);
        document.getElementById("auto").innerHTML = text;
    }
    function del(i)
    {
        ar.splice(i,1);
        document.getElementById("auto").innerHTML = "";
       // console.log(ar);
        disp();
        
    }