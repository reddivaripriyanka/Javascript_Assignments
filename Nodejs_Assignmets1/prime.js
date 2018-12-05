function prime(){
    var x=2;
    var c=0;
    for(var i=2;i<=x/2;i++)
    {
    if(x%i==0)
    {
       c++;
    }
    }
    if(c==0)
         console.log("prime number");
    else
      console.log("not a prime number");
}
prime();
