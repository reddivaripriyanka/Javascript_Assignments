//Creating Object for Amitabh
var Amitabh={fname:"Bhanu",
lname:"reddivari",
age:45,
skills:['coding','cooking','listening','singing'],
address:{city:"Chittoor",pincode:517135},
dateOfBirth:new Date('05-05-1969'),
proffession:"HouseWife",
married:true}
//Creating Object for Abhishek
var Abhishek={fname:"priyanka",
age:21,
skills:["Mechanical","civil","chemical","CSE"],
dateOfBirth:new Date('1997-04-20'),
proffession:"Employee",
married:true}
//Creating object for Aaradhya 
var Aaradhya={fname:"siri",
age:10,
skills:["Eating","sleepin"],
dateOfBirth:new Date('2010-10-20'),
proffession:"kid",
married:false}
console.log(Abhishek); //it prints only Abhishek details
console.log(Amitabh); //it prints only Amitabh details
print=function()
{
var Abhishek=Object.create(Amitabh); //By creating object we are accessing properties from parent one
var Aaradhya=Object.create(Amitabh) //By creating object we are accessing properties from parent one
console.log(Amitabh.fname);
console.log(Abhishek.lname);
console.log(Aaradhya.lname);
console.log(Abhishek.address);
}
print();


