var number1= prompt("Please enter 1 st number:");
var number2=prompt("Please enter 2 nd number");
var number3 = prompt("Please enter 3 rd number:");
if(number1<=30 && number2<=30 && number3<=30)
{
for(var i=1;i<=number1;i++)
{
    document.write('*');
}
document.write('<br>')
for(var i=1;i<=number2;i++)
{
    document.write('*');
}
document.write('<br>')
for(var i=1;i<=number3;i++)
{
    document.write('*');
}
document.write('<br>')
}