
function disp_prompt()
{
var n1=prompt("1.Add\n 2.sub\n 3.mul\n 4.divide\n 5.Exponent\n 6.Mean\n 7.quit\n");  
if(n1>=8 || n1<=0)
{
  window.alert("please enter given range 1-7")
}
if(n1>=1 && n1<=7)
{
    if(n1==1)
    {
        var n2=prompt("Enter 1 st number");
        var n3=prompt("Enter 2 nd number");
        var c=parseInt(n2)+parseInt(n3);
        document.getElementById("txt2").value = c;
    }
    else if(n1==2)
    {
        var n2=prompt("Enter 1 st number");
        var n3=prompt("Enter 2 nd number");
        var c=parseInt(n3)-parseInt(n2);
        document.getElementById("txt2").value = c;
    }
    else if(n1==3)
    {
        var n2=prompt("Enter 1 st number");
        var n3=prompt("Enter 2 nd number");
        var c=parseInt(n2)*parseInt(n3);
        document.getElementById("txt2").value = c;
    }
    else if(n1==4)
    {
        var n2=prompt("Enter 1 st number");
        var n3=prompt("Enter 2 nd number");
        var c=parseInt(n2)/parseInt(n3);
        document.getElementById("txt2").value = c;
    }
    else if(n1==5)
    {
        var n2=prompt("Enter 1 st number");
        var n3=prompt("Enter 2 nd number");
        var c=Math.pow(parseInt(n2),parseInt(n3));
        document.getElementById("txt2").value = c;
           
    }
    else if(n1==6)
    {
            var s=0;
            var p=prompt("enter the series")  
            for(var c=0;p!='***';c++)
            {
                s=s+parseInt(p);
                var p=prompt("enter the series");
            }
            var r=s/parseInt(c);
            document.getElementById("txt2").value =r;
        }
        else
        {
            exit;
        }
    }
} 